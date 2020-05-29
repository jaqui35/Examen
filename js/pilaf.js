function Pila() {
    this._size = 0;
    this._contenedor = [];
}

Pila.prototype.push = function(elemento) {
    let size = this._size++;
    this._contenedor[size] = elemento;
    return this.elemento,
    this._contenedor[size];
}

Pila.prototype.pop = function() {
    var size = this._size; 
    if (size) { 
        deletedData = this._contenedor[size];
        delete this._contenedor[size];
        this._size--; 
        return deletedData;
    }
}

Pila.prototype.peek = function() {
    let a = this._contenedor[this._size - 1]
    return a
}

Pila.prototype.size = function() {
    return this._size;
}

Pila.prototype.print = function() {
    return this._contenedor;
}

let pila = new Pila();

let dato = document.getElementById("push");

let cuerpo = document.getElementById("cuerpo");

let div_c = document.getElementsByTagName("div");

let b_push = document.getElementById("b_push")
let b_peek = document.getElementById("b_peek")
let b_size = document.getElementById("b_size")
let b_print = document.getElementById("b_print")

function Push() {
    b_push.disabled = true;
    div = document.createElement("div");
    div.innerHTML = pila.push(dato.value);
    cuerpo.appendChild(div);
    setTimeout(() => {
            div.style.display = "none"
            b_push.disabled = false;
        }, 4000) 
}

function Pop() {
    pila.pop();
    cuerpo.removeChild(div_c[div_c.length - 1])
}

function Peek() {
    b_peek.disabled = true;
    let elemento = document.createElement("span");
    elemento.innerHTML = pila.peek();
    cuerpo.appendChild(elemento);
    setTimeout(() => {
        cuerpo.removeChild(elemento);
        b_peek.disabled = false;
    }, 4000)
}

function Size() {
    b_peek.disabled = true;
    let elemento = document.createElement("span");
    elemento.innerHTML = pila.size();
    cuerpo.appendChild(elemento);
    setTimeout(() => {
        cuerpo.removeChild(elemento);
        b_peek.disabled = false;
    }, 4000)
}

function Print() {

    pila.print().forEach((element) => {
        let articulo = document.createElement("article");
        articulo.innerHTML = element;
        cuerpo.appendChild(articulo);
        setTimeout(() => {
            cuerpo.removeChild(articulo);
        }, 3000)
    });
}