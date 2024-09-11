import './style.css'
const app: HTMLDivElement = document.querySelector("#app")!;
console.log(app);


const h1 = document.createElement("h1");
h1.textContent = "DCC206 - Aula 14: Sarah Cristina";
app.appendChild(h1);

const form: HTMLFormElement = montaForm();
app.appendChild(form);

form.addEventListener("submit", trataFormulario);

const ul = document.createElement("ul") as HTMLUListElement;
app.append(ul);

function montaForm(): HTMLFormElement{

  const newForm:HTMLFormElement = document.createElement("form");
  montaInput("numeroA", 2, newForm);
  montaInput("numeroB", 5, newForm);

  const envio = document.createElement("button");
  envio.innerText = "Somar";
  newForm.append(envio);

  return newForm;
}

function montaInput(name:string, value: number, targetForm: HTMLFormElement){
  
  const numeroInput: HTMLInputElement = document.createElement("input");
  numeroInput.name = name;
  numeroInput.type= "number";
  numeroInput.valueAsNumber = value;
  targetForm.appendChild(numeroInput);

}

function trataFormulario(this: HTMLFormElement, ev: SubmitEvent) {
  ev.preventDefault();

  console.log("Submit Capturado!");
  console.log("numeroA", form.numeroA.value);
  console.log("numeroB", form.numeroB.value);
  const A = Number(this.numeroA.value);
  const B = Number(this.numeroB.value);
  const li = document.createElement("li");
  li.textContent = String(A+B);
  ul.append(li);

}

