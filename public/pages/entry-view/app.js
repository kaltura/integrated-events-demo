let config;
let libConfig;
let embedAPI;
let cncVisible;
// Listen if I want to load from event-create index.html
document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const fromApp = urlParams.get('fromApp') === 'true';

    if (fromApp) {
        const eventId = urlParams.get('eventId');
        const entryId = urlParams.get('entryId');
        const isChecked = urlParams.get('checked') === 'true';
        console.log("Event ID: " + eventId);
        console.log("Entry ID: " + entryId);
        console.log("Is Checked: " + isChecked);

        if (eventId) {
            document.getElementById('virtualEventId').value = eventId;
        }
        if (entryId) {
            document.getElementById('entryId').value = entryId;
        }
        if (isChecked) {
            document.getElementById('setAsModerator').checked = true;
        }
        if (window.parent) {
            const xhrlogs = window.parent.document.querySelector('.xhrlogs');
            if (xhrlogs) {
                xhrlogs.style.display = 'block';
                // Adjust app width when xhrlogs is shown
                const app = window.parent.document.querySelector('.app');
                if (app) {
                    app.style.width = '70%';
                }
            }
        }

        // Submit the form programmatically if needed
        initData();
    }
});
function closeCnc(){    
    document.getElementById("cncChat").style.display = "none";
    //Handle closure differently for mobile screens since chat will be below the session
    if (document.getElementById("contentContainer").offsetWidth <= 960) { //mobile
        document.getElementById("chatContainer").style.height = "75px";
        document.getElementById("chatContainer").style.width = "unset";
    } else { //desktop
        document.getElementById("chatContainer").style.width = "75px";
        document.getElementById("chatContainer").style.height = "unset";
    }
    cncVisible = false;    
}

function openCnc(){    
    document.getElementById("cncChat").style.display = "flex";
    //Handle closure differently for mobile screens since chat will be below the session
    if (document.getElementById("contentContainer").offsetWidth <= 960) { //mobile
        document.getElementById("chatContainer").style.height = "unset";
    } else { //desktop
        document.getElementById("chatContainer").style.width = "unset";
    }    
    cncVisible = true;    
}

function embedCnc(){
    //console.log("Calling embedCnc function...");
    console.log(embedAPI);
    //now we'll render the chat and set it to visible
    embedAPI.renderCnc(document.getElementById("cncChat"));
    cncVisible = true;
    //render the chat option buttons
    embedAPI.renderSidebarButtons(document.getElementById("cncSidebarButtons"));
    //renderReactions (should only be done for live sessions, so if there will be no chat for VOD, then don't call this render)
    embedAPI.renderReactions(document.getElementById("cncReactions"));
    //render live reactions
    embedAPI.renderLiveReactions(document.getElementById("liveReactions"));
    //render the cnc settings menu
    embedAPI.renderSidebarSettings(document.getElementById("cncSidebarSettings"));    
}

// Load the Chat and Collaboration application
function loadCnc(options) {
    // Load the legal text locally from the public directory 
    let legalTextUrl = "legaltext.txt";
    let translationsUrl = "en.json";
    const cncConfig = {
        consent: {
          legalTextUrls: {
            en: legalTextUrl,
          },
          defaultSettings: {
            receiveNotifications: true,
            showFullName: true,
            allowChatAndCollaboration: true
          },
          cookieConsent: true
        },
        server: {
          jwtToken: options.jwt,
          serviceUrl: "https://chat.nvp1.ovp.kaltura.com/api_v3"
        },
        reactions: {
          mode: "on",
          sourceUrl: "/reactions/widgets-reactions.umd.js",
          endpointUrl: "https://analytics.kaltura.com",
          ks: options.ks
        },
        ui: {
          theme: {
            brandColor: '#00fa11',
            mode: 'dark',
            colorScheme: 'Monochrome',
            fontFamily: 'Lato',
            roundness: 'Sharp edges',
            headerColor: '#FF0000',
            otherColor: '#FFFF00',
            meta: {
              version: 2
            }
          },
          highContrast: false,
          toastTimeout: 3000,
          zIndex: 500,
          position: {
            right: "8px"
          },
          customContextThumbnailUrl: 'https://cfvod.kaltura.com/p/${libConfig.partnerId}/thumbnail/entry_id/1_m8q46mqp/width/36/height/36/type/3',
          locale: "en",
          customTranslationUrl: "http://path.to.file",
          groupChat: {
            enabled: true,
            reactions: true,
            reply: true
          },
          instanceOptions: {
            enableChat: true,
            enableSearch: true,
            enableAssistant: false
          },
          topMargin: 60
        },
        helpLink: "http://www.customerdomain.com/help_page_for_chat",
        helpConfig: {
          forceHide: false,
          link: "http://www.customerdomain.com/help_page_for_chat",
          label: "Contact Support"
        },
        moderation: {
          moderatorUrl: "https://www.kaltura.com/apps/kep-moderator/latest/embed.php",
          ui: {
            label: "custom label",
            thumbnailUrl: 'https://cfvod.kaltura.com/p/${libConfig.partnerId}/thumbnail/entry_id/1_m8q46mqp/width/36/height/36/type/3',
            name: "session name",
            ctaButton: {
              type: "chatWithExpert"
            }
          }
        }
      };
      

    
    // Function to initiate embedded chat API object
    function initiateEmbeddedCnc() {
        embedAPI =
            KalturaEventsPlatform.collaboration.widgets.embedded.new();
        
    }
    // get the API object
    initiateEmbeddedCnc();
    // define the callback for API object
    embedAPI.addOnLoadFinished(embedCnc);
    // define the callback for the open and close functions
    embedAPI.addOnClose(closeCnc);
    embedAPI.addOnOpen(openCnc);
    // call the render container function (will call the defined callback from above when complete)
    embedAPI.renderCncContainer(document.getElementById("cncContainer"), cncConfig);
}

// Fetch user data from the server
async function initData() {
    //GET user from URL
    let userId = false;
    const user = getCurrentUser();
    if(user && user.id) {
        userId = user.id;
    }

    const entryId = document.getElementById('entryId').value;
    const virtualEventId = document.getElementById('virtualEventId').value;
    const setAsModerator = document.getElementById('setAsModerator').checked;

    // mandatory fields:
    if(!userId) {
        console.log("missing user ID, please login first");
        const heading = document.querySelector("#name");
        heading.textContent = "missing user ID, please login first";
        heading.classList.remove('hide');
        return;
    }

    const formInfo = {
        userId,
        entryId,
        virtualEventId,
        setAsModerator
    }
    // debugger;
    window.sessionStorage.setItem('cnc-demo-app-form-values', JSON.stringify(formInfo));
    //Fetch library data, uses the /embed-cnc/get-lib-data route
    const {response, body} = await fetchHelper(window.location.origin + "/api/kaltura/get-lib-data", 'GET', null);
    libData = response;
    libConfig = body;

    const {response: response2, body: body2} = await fetchHelper(
        window.location.origin + "/api/kaltura/get-tokens", 
        'POST', 
        JSON.stringify({
            userId,
            entryId,
            eventId: virtualEventId,
            setAsModerator
        })
    );
    config = body2;
    //console.log("CONFIG: " + JSON.stringify(config));

    await loadLibs(libConfig);
}

// Fetch the library data
async function loadLibs(libconfig) {
    return new Promise((resolve, reject) => {
        const cncScript = document.createElement("script");
        cncScript.type = "text/javascript";
        cncScript.src = `https://cdnapisec.kaltura.com/p/${libconfig.partnerId}/embedPlaykitJs/uiconf_id/${libconfig.cncPlayerID}`;
        cncScript.onload = () => loadCnc(config);

        const playerScript = document.createElement("script");
        playerScript.type = "text/javascript";
        playerScript.src = `https://cdnapisec.kaltura.com/p/${libconfig.partnerId}/embedPlaykitJs/uiconf_id/${libconfig.uiconfid}`;
        playerScript.onload = () => loadContent(config);

        document.head.appendChild(cncScript);
        document.head.appendChild(playerScript);
    });
}

// Load the Kaltura Player
async function loadPlayer(options) {
    try {
        const playerOptions = {
            targetId: "player",
            provider: {
                partnerId: ""+libConfig.partnerId, //partner id
                uiConfId: ""+libConfig.uiconfid, //player id
                ks: ""+options.ks, //this is the ks we created
            },
        };
        var kalturaPlayer = KalturaPlayer.setup(playerOptions);
        kalturaPlayer.loadMedia({ entryId: options.entry.id });
    } catch (e) {
        console.error(e.message);
    }
}

// Load Kaltura Meeting Experience(KME)
async function loadKME(kmeDataInput) {
    try {
        var form = document.getElementById("my-form");
        for (var key in kmeDataInput.kmeRoomLti[0]) {
            var input = document.createElement("input"); // Create a new input element
            input.type = "hidden"; // Set the type attribute to "text"
            input.name = key; // Set the name attribute to the current input name
            input.value = kmeDataInput.kmeRoomLti[0][key]; // Set the value attribute to the current input value

            form.appendChild(input); // Add the input element to the form
        }

        var input1 = document.createElement("input"); // Create a new input element
        input1.type = "hidden"; // Set the type attribute to "text"
        input1.name = "oauth_signature"; // Set the name attribute to the current input name
        input1.value = kmeDataInput.kmeRoomLti[1]; // Set the value attribute to the current input value
        form.appendChild(input1); // Add the input element to the form

        form.style.display = "none";
        form.submit();
    } catch (e) {
        console.error(e.message);
    }
}

// Determines the type of media to be displayed (KME or Live) based on the configuration data. If the media type is KME, it calls the loadKME() function, and if it is Live, it calls the loadPlayer() function
async function loadContent(config) {
    // VOD entry:
    let shouldLoadPlayer = (config.entry.type == 1 && config.entry.mediaType === 1 && config.entry.status == 2);
    // live entry - this could be regular live or simulive
    if(!shouldLoadPlayer) {
        //console.log("entry is not VOD, checking for live")
        shouldLoadPlayer = config.entry.type == 7;
    }


    let shouldLoadRoom = false;
    if(config.kmeRoomLti[0] !== null) {
        //console.log("has LTI launch info");
        // new room entry
        shouldLoadRoom = (config.entry.type === 'room.room' && config.kmeRoomLti[0] !== null);
        // old meeting entry
        if(!shouldLoadRoom) {
            console.log("not new room, checking all")
            shouldLoadRoom = (config.entry.type == 1 && config.entry.status == 7 && config.entry.adminTags && config.entry.adminTags.indexOf('_room') > -1);
        }
        //console.log("should launch room is ")
        //console.log(shouldLoadRoom);
    }

    if (shouldLoadRoom) {
        //console.log("launching room");
        loadKME(config);
        var kmeContainer = document.getElementById("kme-parent-container");
        kmeContainer.classList.remove('hide');
    } else if (shouldLoadPlayer) {
        //console.log("loading player");
        var parentContainer = document.getElementById("player-container");
        parentContainer.classList.remove('hide');
        loadPlayer(config);
    } else {
        //console.log("don't know what to do with entry type")
    }

    // Determines the type of media to be displayed (KME or Live) based on the configuration data. If the media type is KME, it calls the loadKME() function, and if it is Live, it calls the loadPlayer() function
}