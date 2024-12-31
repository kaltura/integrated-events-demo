/**
 * Initialize all event listeners when the DOM is fully loaded.
 * This sets up handlers for form submissions and button clicks.
 */
document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('eventForm');
    eventForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        await handleCreateEvent();
    });

    const showEventsBtn = document.getElementById('showEventsBtn');
    showEventsBtn.addEventListener('click', async () => {
        await handleShowEvents();
    });

    const sessionForm = document.getElementById('sessionForm');
    sessionForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        await handleCreateSession();
    });

    const closeModal = document.getElementById('closeModal');
    closeModal.addEventListener('click', () => {
        document.getElementById('modalDialog').style.display = 'none';
    });

    const getSessionForm = document.getElementById('getSessionForm');
    getSessionForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        await handleShowEntryDetails();
    });

    const clearLogsBtn = document.getElementById('clearLogsBtn');
    clearLogsBtn.addEventListener('click', () => {
        document.getElementById('logOutput').textContent = '';
    });

    const roomForm = document.getElementById('roomForm');
    roomForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        await createRoom();
    });
});

/**
 * Creates a new room entry in the virtual event system.
 * @returns {Promise<void>}
 * @throws {Error} If the room creation fails
 */
async function createRoom() {
    try {
        const roomName = document.getElementById('roomName').value;
        const roomDesc = document.getElementById('roomDesc').value;
        const eventRoomId = document.getElementById('eventRoomId').value;
        const liveEntryIdInput = document.getElementById('liveEntryIdInput').value;

        logMessage(`Creating room: ${roomName} within event ID ${eventRoomId}`);

        const response = await fetch('/api/kaltura/add-room', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                roomName,
                roomDesc,
                eventRoomId,
                liveEntryIdInput
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to create room');
        }

        logMessage('Room created successfully:');
        logDataMessage(data);
    } catch (error) {
        console.error('Error creating room:', error);
        logMessage('Error creating room: ' + error.message);
    }
}

/**
 * Logs a message to the UI log output area.
 * @param {string} message - The message to log
 */
function logMessage(message) {
    const logOutput = document.getElementById('logOutput');
    logOutput.textContent += message + '\n';
}

/**
 * Logs a structured data object to the UI log output area.
 * @param {Object} message - The data object to log
 */
function logDataMessage(message) {
    const logOutput = document.getElementById('logOutput');
    logOutput.textContent += JSON.stringify(message, null, 2) + '\n';
}

/**
 * Creates a new virtual event in the system.
 * @returns {Promise<void>}
 * @throws {Error} If the event creation fails
 */
async function handleCreateEvent() {
    try {
        const eventName = document.getElementById('eventName').value;
        const eventDescription = document.getElementById('eventDescription').value;

        logMessage(`Creating event: ${eventName}`);

        const response = await fetch('/api/kaltura/add-virtual-event', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                eventName,
                eventDescription
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to create event');
        }

        const eventDetails = data.event;
        const logDetails = `
            Event Created Successfully:
            ID: ${eventDetails.id}
            Name: ${eventDetails.name}
            Description: ${eventDetails.description}
            Status: ${eventDetails.status}
            Created At: ${eventDetails.createdAt}
            Updated At: ${eventDetails.updatedAt}
        `;
        logMessage(logDetails.trim());
    } catch (error) {
        console.error('Error creating event:', error);
        logMessage('Error creating event: ' + error.message);
        alert('Error creating event: ' + error.message);
    }
}

/**
 * Fetches and displays all virtual events.
 * @returns {Promise<void>}
 * @throws {Error} If fetching events fails
 */
async function handleShowEvents() {
    try {
        logMessage('Fetching events...');
        const response = await fetch('/api/kaltura/list-virtual-event', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error('Failed to fetch events');
        }

        const data = await response.json();
        const events = data.event;

        populateEventList(events);
        logMessage(events.length + ' Events fetched successfully.');
        logDataMessage(data);
    } catch (error) {
        console.error('Error fetching events:', error);
        logMessage('Error fetching events: ' + error.message);
        alert('Error fetching events: ' + error.message);
    }
}

/**
 * Fetches and displays sessions for a specific event.
 * @param {string} eventId - The ID of the event to fetch sessions for
 * @returns {Promise<void>}
 * @throws {Error} If fetching sessions fails
 */
async function handleShowSessions(eventId) {
    try {
        logMessage('Fetching sessions from event ID ' + eventId + '...');
        const response = await fetch('/api/kaltura/list-virtual-sessions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ eventId })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch sessions');
        }

        const data = await response.json();
        const sessions = data.objects;
        logDataMessage(data);

        const sessionList = document.getElementById('sessionList');
        sessionList.innerHTML = '';
        const header = document.getElementById('model-header');
        header.textContent = `Sessions for Selected Event: ${eventId}`;

        const table = document.createElement('table');
        const thead = document.createElement('thead');
        const tbody = document.createElement('tbody');

        const headerRow = document.createElement('tr');
        const headers = ['ID', 'Name', 'Type', 'Moderator', ''];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        thead.appendChild(headerRow);
        table.appendChild(thead);

        sessions.forEach(session => {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = session.object.id;
            row.appendChild(idCell);

            const nameCell = document.createElement('td');
            nameCell.textContent = session.object.name;
            row.appendChild(nameCell);

            const typeCell = document.createElement('td');
            switch (session.object.type) {
                case 'room.room':
                   
                    if (session.object.broadcastEntryId) {
                        typeCell.textContent = `DIY Room - Broadcast ID: ${session.object.broadcastEntryId}`;
                    }else{
                        typeCell.textContent = 'Room';
                    }
                    break;
                case '1':
                    typeCell.textContent = 'VOD';
                    break;
                case '7':
                    typeCell.textContent = 'Live Stream';
                    break;
                default:
                    typeCell.textContent = session.object.type;
            }
            row.appendChild(typeCell);

            const moderatorCell = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = session.object.id;
            moderatorCell.appendChild(checkbox);
            row.appendChild(moderatorCell);


            const actionCell = document.createElement('td');
            const button = document.createElement('button');
            button.textContent = 'Launch Session';
            button.onclick = () => {
                const isChecked = checkbox.checked;
                const entryId = session.object.id;
                console.log(`Event ID: ${eventId}, Entry ID: ${entryId}, Checked: ${isChecked}`);
                const url = `../entry-view/index.html?eventId=${eventId}&entryId=${entryId}&checked=${isChecked}&fromApp=true`;
                window.location.href = url;
            };
            actionCell.appendChild(button);
            row.appendChild(actionCell);

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        sessionList.appendChild(table);

        document.getElementById('modalDialog').style.display = 'block';
        logMessage('Sessions fetched successfully.');
    } catch (error) {
        console.error('Error fetching sessions:', error);
        logMessage('Error fetching sessions: ' + error.message);
        alert('Error fetching sessions: ' + error.message);
    }
}

/**
 * Fetches and displays details for a specific session.
 * @returns {Promise<void>}
 * @throws {Error} If fetching session details fails
 */
async function handleShowEntryDetails() {
    try {
        const entryId = document.getElementById('sessionIdInput').value;
        logMessage('Fetching details from Entry ID ' + entryId + '...');
        const response = await fetch('/api/kaltura/session-detail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ entryId })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch entry details');
        }

        const data = await response.json();
        logDataMessage(data);
    } catch (error) {
        console.error('Error fetching session details:', error);
        logMessage('Error fetching session details: ' + error.message);
        alert('Error fetching session details: ' + error.message);
    }
}

/**
 * Creates a new session within an event.
 * @returns {Promise<void>}
 * @throws {Error} If the session creation fails
 */
async function handleCreateSession() {
    try {
        const sessionName = document.getElementById('sessionName').value;
        const sessionDescription = document.getElementById('sessionDescription').value;
        const sessionEventId = document.getElementById('sessionEventId').value;

        logMessage(`Creating session: ${sessionName} within event ID ${sessionEventId}`);

        const response = await fetch('/api/kaltura/add-live', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sessionName,
                sessionDescription,
                sessionEventId
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Failed to create session');
        }

        logMessage('Session created successfully:');
        logDataMessage(data);
    } catch (error) {
        console.error('Error creating session:', error);
        logMessage('Error creating session: ' + error.message);
        alert('Error creating session: ' + error.message);
    }
}

/**
 * Renders the list of events in the UI.
 * @param {Array<Object>} events - Array of event objects to display
 * @param {string} events[].id - Event ID
 * @param {string} events[].name - Event name
 */
function populateEventList(events) {
    const eventList = document.getElementById('eventList');
    eventList.innerHTML = '';

    events.forEach((event) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.href = '#';
        link.textContent = `${event.id}: ${event.name}`;

        link.onclick = (e) => {
            e.preventDefault();
            handleShowSessions(event.id);
        };

        listItem.appendChild(link);
        eventList.appendChild(listItem);
    });

    logMessage('Event list populated successfully.');
}