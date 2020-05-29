class Cola {
    constructor() {
        this.cola = [];
    }

    enqueue(elemento) {
            this.cola.push(elemento);
            return this.cola[this.cola.length - 1];
        }
    dequeue() {
            return this.cola.shift();
        }
    peek() {
        return this.cola[0];
    }
    size() {
        return this.cola.length;
    }
    print() {
        return this.cola;
    }
}

const cola = new Cola();

let dato = document.getElementById("enqueue");

let cuerpo = document.getElementById("cuerpo");

let div_c = document.getElementsByTagName("div");

let b_enqueue = document.getElementById("b_enqueue")
let b_peek = document.getElementById("b_peek")
let b_size = document.getElementById("b_size")
let b_print = document.getElementById("b_print")

function Enqueue() {
    b_enqueue.disabled = true;
    div = document.createElement("div");
    div.innerHTML = cola.enqueue(dato.value);
    cuerpo.appendChild(div);
    setTimeout(() => {
            div.style.display = "none"
            b_enqueue.disabled = false;
        }, 2000) 
}

function Dequeue() {
    cola.dequeue();
    cuerpo.removeChild(div_c[div_c.length])
}

function Peek() {
    b_peek.disabled = true;
    let elemento = document.createElement("span");
    elemento.innerHTML = cola.peek();
    cuerpo.appendChild(elemento);
    setTimeout(() => {
        cuerpo.removeChild(elemento);
        b_peek.disabled = false;
    }, 2000)
}

function Size() {
    b_size.disabled = true;
    let elemento = document.createElement("span");
    elemento.innerHTML = cola.size();
    cuerpo.appendChild(elemento);
    setTimeout(() => {
        cuerpo.removeChild(elemento);
        b_size.disabled = false;
    }, 2000)
}

function Print() {

    cola.print().forEach((element) => {
        let articulo = document.createElement("article");
        articulo.innerHTML = element;
        cuerpo.appendChild(articulo);
        setTimeout(() => {
            cuerpo.removeChild(articulo);
        }, 2000)
    });
}