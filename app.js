const SELECTORS = {
  WHATSAPP_HEADER: "header > div > div > div",
  MESSAGE_INPUT: 'div[contenteditable="true"]',
};

const IDS = {
  MULTI_MESSAGE_BTN: "multi-message-btn",
  MESSAGE_DIALOG: "message-dialog",
  MESSAGE_FORM: "message-form",
  MESSAGE_CONTENT: "message-content",
  MESSAGE_COUNT: "message-count",
};

const FLOATING_BUTTON_HTML = `
<div class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x1cy8zhl x100vrsf x1vqgdyp xhgddhk xdxvlk3 x1fglp x1rp6h8o xg6i1s1 x1277o0a x13i9f1t xr9ek0c xjpr12u"><button id="${IDS.MULTI_MESSAGE_BTN}" aria-label="Span Tool" tabindex="-1" data-navbar-item="true" data-navbar-item-selected="false" class="xjb2p0i xk390pu x1heor9g x1ypdohk xjbqb8w x972fbf xcfux6l x1qhh985 xm0m39n xh8yej3 x1y1aw1k x1sxyh0 xwib8y2 xurb0ha" data-navbar-item-index="4"><div class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4 xh8yej3"><div class="x1c4vz4f xs83m0k xdl72j9 x1g77sc7 x78zum5 xozqiw3 x1oa3qoh x12fk4p8 xeuugli x2lwn1j x1nhvcw1 x1q0g3np x6s0dn4 x1n2onr6" style="flex-grow: 1;"><div><span aria-hidden="true" data-icon="span" class=""><svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="24px" width="24px" preserveAspectRatio="xMidYMid meet" class="" fill="none"><title>spam</title><path fill-rule="evenodd" fill="currentColor" d="m255.9 27c3.2 0 5.7 0.7 8 2.2 1.9 1.3 4.4 3.6 5.5 5.1 2 2.7 2.1 4 2.1 29.7 0 25.7-0.1 27-2.1 29.7-1.1 1.5-3.6 3.8-5.5 5.1-2.3 1.5-4.9 2.3-7.9 2.3-3 0-5.6-0.8-7.9-2.3-1.9-1.3-4.4-3.6-5.5-5.1-2-2.7-2.1-4-2.1-29.7 0-25.7 0.1-27 2.1-29.7 1.1-1.5 3.6-3.8 5.4-5q3.4-2.3 7.9-2.3zm-168.4 42.7c1.7 0.3 4.1 1.1 5.5 1.8 1.4 0.8 13.2 12.1 26.2 25.2 21 21.2 23.7 24.2 24.3 27.8 0.4 2.2 0.4 5.6 0 7.5-0.4 2-2.3 5-4.4 7.1q-3.6 3.7-7.6 4.4c-2.2 0.4-5.6 0.4-7.5 0-2.9-0.5-7.9-5.1-28.2-25.3-21.4-21.4-24.8-25.3-25.7-29q-1.1-4.2-0.1-8c0.5-2 2.4-5.2 4.2-7 1.8-1.8 4.9-3.7 6.8-4.1 1.9-0.5 4.8-0.7 6.5-0.4zm341.5 0c1.9 0.3 4.2 0.9 5 1.3 0.8 0.5 2.7 2.1 4.3 3.7 1.5 1.5 3.2 4.6 3.7 6.8 0.6 2.6 0.6 5.4-0.1 8-0.9 3.3-5.1 8-25.7 28.7-22.1 22-25.1 24.7-28.7 25.3-2.2 0.4-5.6 0.4-7.5 0-2-0.4-5-2.3-7.1-4.4-2.1-2.1-4-5.1-4.4-7.1-0.4-1.9-0.4-5.3 0-7.5 0.6-3.6 3.3-6.7 24.8-28.3 18.4-18.4 25.2-24.6 28.2-25.7 2.3-0.8 5.5-1.2 7.5-0.8zm-169 63.9c5.8 0.2 14.3 1.1 19 2 4.7 0.9 11.9 2.7 16 4.1 4.1 1.4 11.3 4.5 16 6.8 4.7 2.4 11.6 6.5 15.5 9.2 3.9 2.7 10.1 7.8 13.9 11.4 3.8 3.5 9.7 10.2 13.2 14.9 3.6 4.7 8.5 12.6 11.1 17.5 2.5 4.9 5.9 12.8 7.5 17.5 1.5 4.7 3.6 12.3 4.5 17 0.9 5.1 1.6 13.7 1.6 21.5 0.1 7.1-0.5 16.4-1.2 20.5-0.7 4.1-2.8 12.2-4.6 18-2.1 6.4-4.5 11.8-6.2 13.9-1.5 1.8-4 4-5.6 4.7-1.5 0.8-4.8 1.4-7.5 1.4-2.9 0-6-0.8-8-2-1.7-1.1-4.1-3.8-5.2-6-1.1-2.2-2-5.4-2-7 0-1.6 1.5-7.6 3.4-13.3 2-5.7 4-14.4 4.6-19.7 0.8-7.1 0.8-12 0-19.5-0.6-5.5-2.5-14.1-4.1-19-1.7-4.9-4.5-11.7-6.3-15-1.9-3.3-6-9.4-9.3-13.5-3.2-4.1-9.2-10.1-13.3-13.4-4.1-3.2-10.2-7.3-13.5-9.1-3.3-1.9-10.1-4.7-15-6.4-4.9-1.6-13.3-3.5-18.5-4.1-7-0.8-12.1-0.8-19.5 0-5.7 0.6-13.8 2.4-19 4.1-4.9 1.7-11.7 4.5-15 6.3-3.3 1.9-9.4 6-13.5 9.3-4.1 3.2-10.1 9.2-13.4 13.3-3.2 4.1-7.3 10.2-9.1 13.5-1.9 3.3-4.7 10.1-6.4 15-1.7 4.9-3.5 13.3-4.1 18.5-0.6 5.2-0.8 12.6-0.4 16.5 0.3 3.9 1.5 10.6 2.5 15 1.1 4.4 3.2 10.9 4.7 14.5 1.5 3.6 5 9.9 7.7 14 4.1 6.4 6.4 11.9 14.5 36.5 5.3 15.9 10.6 30.8 11.7 33 1.1 2.2 3.6 5.3 5.4 6.9 1.9 1.6 5.2 3.7 7.4 4.7 3.6 1.7 7.2 1.9 36.5 1.9 29.3 0 32.9-0.2 36.5-1.9 2.2-1 5.5-3.1 7.4-4.7 1.9-1.6 4.8-5.8 6.6-9.4 1.8-3.6 4.6-7.7 6.4-9.3 1.7-1.5 4.8-3 6.8-3.3 2.1-0.4 5.5-0.1 7.5 0.5 2.1 0.6 5.2 2.5 6.8 4.1 1.6 1.6 3.5 4.9 4.1 7.2 0.8 3.4 0.7 5.4-0.5 9.3-0.9 2.7-3.2 7.9-5.3 11.4-2.1 3.5-6.8 9.1-17 18.6l-0.6 12.5c-0.3 6.9-1.3 15-2.1 18-0.9 3-3 8.4-4.8 12-2.1 4.1-5.9 9.1-10.3 13.6-4.5 4.5-9.5 8.3-14 10.6-3.9 2-9.9 4.4-13.5 5.2-3.6 0.9-9.9 1.6-14 1.6-4.1 0-10.4-0.7-14-1.6-3.6-0.8-9.7-3.2-13.5-5.2-4.5-2.3-9.5-6.1-14-10.6-4.4-4.5-8.2-9.5-10.3-13.6-1.8-3.6-3.9-9-4.8-12-0.8-3-1.8-11.1-2.7-30.5l-6.6-6.1c-3.6-3.4-8.3-9-10.4-12.5-2.4-4.2-7.1-16.5-13.3-35.4-6.3-19.1-10.7-30.7-12.9-34-1.7-2.8-4.9-8.4-7-12.5-2.1-4.1-5.1-11.3-6.7-16-1.5-4.7-3.6-12.3-4.5-17-1-5.3-1.6-13.6-1.6-22 0-8.4 0.6-16.7 1.6-22 0.9-4.7 3-12.3 4.5-17 1.6-4.7 4.7-12.1 7-16.5 2.2-4.4 6.2-11.2 8.9-15 2.7-3.8 7.8-10.1 11.4-13.9 3.5-3.8 10.2-9.7 14.9-13.2 4.7-3.6 12.3-8.4 17-10.8 4.7-2.4 12.3-5.8 17-7.4 4.7-1.7 12.3-3.7 17-4.6 4.7-0.8 10.3-1.7 12.5-2 2.2-0.2 8.7-0.2 14.5 0zm-31 291.7c0 1.7 0.6 5.5 1.4 8.2 0.8 2.8 2.9 6.9 4.5 9.3 1.7 2.3 5.2 5.4 7.9 6.9 3.2 1.8 6.6 2.8 10.7 3.1 3.3 0.2 7.9-0.1 10.3-0.7 2.3-0.6 6.1-2.6 8.4-4.4 2.5-1.9 5.4-5.6 7-8.8 1.6-2.9 3.1-8 3.5-11.2l0.8-5.7h-54.5zm-163.8-185c24.3 0.2 25.8 0.4 28.5 2.3 1.5 1.2 3.8 3.7 5.1 5.5 1.5 2.3 2.3 4.9 2.3 8 0 3-0.8 5.6-2.3 7.9-1.3 1.8-3.6 4.3-5.1 5.5-2.7 2-4 2.1-29.7 2.1-25.7 0-27-0.1-29.7-2.1-1.5-1.2-3.8-3.7-5.1-5.5-1.5-2.3-2.2-4.9-2.2-7.7 0-2.3 0.6-5.5 1.4-7 0.8-1.5 2.5-3.7 3.8-4.9 1.3-1.2 3.4-2.7 4.8-3.3 1.5-0.6 12.5-0.9 28.2-0.8zm384 0c24.3 0.2 25.8 0.4 28.5 2.3 1.5 1.2 3.8 3.7 5.1 5.5 1.5 2.3 2.3 4.9 2.3 8 0 3-0.8 5.6-2.3 7.9-1.3 1.8-3.6 4.3-5.1 5.5-2.7 2-4 2.1-29.7 2.1-25.7 0-27-0.1-29.7-2.1-1.5-1.2-3.8-3.7-5.1-5.5-1.5-2.3-2.2-4.9-2.2-7.7 0-2.3 0.6-5.5 1.4-7 0.8-1.5 2.5-3.7 3.8-4.9 1.3-1.2 3.4-2.7 4.8-3.3 1.5-0.6 12.5-0.9 28.2-0.8z"/></svg></span></div></div></div></button></div>
`;

const DIALOG_HTML = `
<dialog id="${IDS.MESSAGE_DIALOG}" closedby="any">
    <form method="dialog" id="${IDS.MESSAGE_FORM}" class="dialog-form">
        <div class="dialog-header">
            <h2>WSPAM</h2>
        </div>
        
        <div class="form-group">
            <label for="${IDS.MESSAGE_CONTENT}">Mensaje:</label>
            <textarea 
                id="${IDS.MESSAGE_CONTENT}" 
                name="message" 
                rows="4" 
                placeholder="Escribe tu mensaje aquí..."
                required
            ></textarea>
        </div>
        
        <div class="form-group">
            <label for="${IDS.MESSAGE_COUNT}">Cantidad de repeticiones:</label>
            <input 
                id="${IDS.MESSAGE_COUNT}" 
                name="count"
                type="number" 
                min="1" 
                value="1"
                required
            >
        </div>
        <button type="submit" value="submit" class="btn-submit">Enviar</button>
        <div class="dialog-footer">
            <p class="github-link">
                Creado por <a href="https://github.com/max29xd" target="_blank" rel="noopener noreferrer">max29xd</a>
            </p>
        </div>
    </form>
</dialog>
`;

const DIALOG_CSS = `
<style>
    #${IDS.MESSAGE_DIALOG} {
        border: none;
        border-radius: var(--radius-app);
        width: 90%;
        max-width: 500px;
        box-shadow: 0 10px 25px var(--shadow-light);
        background-color: var(--intro-background);
        color: var(--text-primary);
        padding: 0;
    }
    
    #${IDS.MESSAGE_DIALOG}::backdrop {
        background-color: var(--modal-backdrop);
        backdrop-filter: blur(2px);
    }
    
    #${IDS.MESSAGE_FORM} {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1.5rem;
    }
    
    .dialog-header h2 {
        margin: 0;
        color: var(--primary-title);
        font-size: 1.5rem;
        text-align: center;
    }
    
    .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .form-group label {
        font-weight: 500;
        color: var(--text-secondary);
    }
    
    #${IDS.MESSAGE_CONTENT} {
        padding: 0.75rem;
        border: 1px solid var(--input-border);
        border-radius: 6px;
        resize: vertical;
        min-height: 100px;
        font-family: inherit;
        transition: border-color 0.3s;
        background-color: var(--compose-input-background);
        color: var(--message-primary);
    }
    
    #${IDS.MESSAGE_CONTENT}:focus {
        border-color: var(--input-border-active);
        outline: none;
        box-shadow: 0 0 0 2px var(--button-focus-outline);
    }
    
    #${IDS.MESSAGE_CONTENT}::placeholder {
        color: var(--input-placeholder);
    }
    
    #${IDS.MESSAGE_COUNT} {
        padding: 0.75rem;
        border: 1px solid var(--input-border);
        border-radius: 6px;
        width: 100px;
        background-color: var(--compose-input-background);
        color: var(--message-primary);
    }
    
    .btn-submit { /* Simplificado, asumiendo un solo botón principal */
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 500;
        transition: all 0.3s;
        border: none;
        background-color: var(--button-primary-background);
        color: var(--button-primary);
    }
    
    .btn-submit:hover {
        background-color: var(--button-primary-background-hover);
    }

    .dialog-footer {
        text-align: center;
        font-size: 0.8rem;
        color: var(--text-secondary);
    }
</style>
`;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function insertHTMLAfter(referenceNode, htmlString) {
  referenceNode.insertAdjacentHTML("afterend", htmlString);
  return referenceNode.nextElementSibling;
}

function insertHTMLToBody(htmlString) {
  document.body.insertAdjacentHTML("beforeend", htmlString);
  return document.body.lastElementChild;
}

function simulateTextInput(element, text) {
  element.dispatchEvent(
    new InputEvent("beforeinput", {
      inputType: "insertText",
      data: text,
      bubbles: true,
      cancelable: true,
    })
  );
  element.dispatchEvent(new Event("input", { bubbles: true }));
}

function simulateEnterKey(element) {
  element.dispatchEvent(
    new KeyboardEvent("keydown", {
      key: "Enter",
      code: "Enter",
      which: 13,
      keyCode: 13,
      bubbles: true,
      view: window,
      cancelable: true,
    })
  );
}

function waitForWhatsAppContainer() {
  return new Promise((resolve) => {
    let container = document.querySelector(SELECTORS.WHATSAPP_HEADER);
    if (container) {
      return resolve(container);
    }

    const observer = new MutationObserver((mutations, obs) => {
      container = document.querySelector(SELECTORS.WHATSAPP_HEADER);
      if (container) {
        obs.disconnect();
        resolve(container);
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

function createFloatingButton(container) {
  insertHTMLAfter(container, FLOATING_BUTTON_HTML);
}

function createMessageDialog() {
  insertHTMLToBody(DIALOG_CSS);
  const dialogElement = insertHTMLToBody(DIALOG_HTML);
  if (!(dialogElement instanceof HTMLDialogElement)) {
    throw new Error("No se pudo crear el elemento dialog.");
  }
  return dialogElement;
}

function findMessageInputPanel() {
  const editableElements = document.querySelectorAll(SELECTORS.MESSAGE_INPUT);
  return editableElements.length > 1 ? editableElements[1] : null;
}

async function sendMultipleMessages(message, count) {
  const inputPanel = findMessageInputPanel();

  if (!inputPanel) {
    alert(
      "No se pudo encontrar el cuadro de texto de WhatsApp. Asegúrate de tener un chat abierto."
    );
    console.error(
      "Panel de entrada no encontrado con el selector:",
      SELECTORS.MESSAGE_INPUT
    );
    return;
  }

  inputPanel.focus();
  await delay(10);

  for (let i = 0; i < count; i++) {
    simulateTextInput(inputPanel, message);
    await delay(20);

    simulateEnterKey(inputPanel);
    await delay(50);
  }
}

async function init() {
  try {
    console.log("Iniciando extensión...");
    const container = await waitForWhatsAppContainer();
    console.log("Contenedor de WhatsApp encontrado.");

    createFloatingButton(container);
    console.log("Botón flotante creado.");

    const dialog = createMessageDialog();
    console.log("Diálogo creado.");

    const form = document.getElementById(IDS.MESSAGE_FORM);
    const multiMessageBtn = document.getElementById(IDS.MULTI_MESSAGE_BTN);

    if (!form || !multiMessageBtn || !dialog) {
      throw new Error(
        "No se pudieron encontrar elementos esenciales de la UI."
      );
    }

    multiMessageBtn.addEventListener("click", () => {
      if (dialog.showModal) {
        dialog.showModal();
      } else {
        alert("Tu navegador no soporta diálogos modales nativos.");
      }
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const messageInput = form.elements.namedItem(IDS.MESSAGE_CONTENT);
      const countInput = form.elements.namedItem(IDS.MESSAGE_COUNT);

      if (
        !(messageInput instanceof HTMLTextAreaElement) ||
        !(countInput instanceof HTMLInputElement)
      ) {
        console.error("Elementos del formulario no encontrados.");
        return;
      }

      const message = messageInput.value.trim();
      const count = parseInt(countInput.value, 10);

      if (message && count > 0) {
        dialog.close();
        await delay(100);
        try {
          await sendMultipleMessages(message, count);
          console.log(`${count} mensajes enviados.`);
        } catch (sendError) {
          console.error("Error durante el envío de mensajes:", sendError);
          alert(
            `Ocurrió un error al enviar los mensajes: ${sendError.message}`
          );
        }
      } else {
        console.warn("Intento de envío inválido:", { message, count });
      }
    });

    console.log("Extensión cargada y lista.");
  } catch (error) {
    console.error("Error crítico al inicializar la extensión:", error);
    alert(
      `Error al cargar la extensión: ${error.message}. Revisa la consola para más detalles.`
    );
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  setTimeout(init, 500);
}
