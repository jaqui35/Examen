function Cola() {
    this._ultdt = 1;
    this._nvdt = 1;
    this._storage = {};
}

Cola.prototype.enqueue = function(elemento) {
    this._storage[this._nvdt] = elemento;
    this._nvdt++;
};

Cola.prototype.dequeue = function() {
    var _ultdt = this._ultdt,
        _nvdt = this._nvdt,
        deletedData;

    if (_ultdt !== _nvdt) { 
        deletedData = this._storage[_ultdt]
        delete this._storage[_ultdt];
        this._ultdt++;
        return deletedData;
    }
};

Cola.prototype.peek = function() {
    return this._ultdt;
}

Cola.prototype.size = function() {
    return this._nvdt - this._ultdt;
};

Cola.prototype.print = function() {
    return this._storage;
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
        }, 3000) 
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
    }, 3000)
}

function Size() {
    b_peek.disabled = true;
    let elemento = document.createElement("span");
    elemento.innerHTML = cola.size();
    cuerpo.appendChild(elemento);
    setTimeout(() => {
        cuerpo.removeChild(elemento);
        b_peek.disabled = false;
    }, 3000)
}

function Print() {

    cola.print().forEach((element) => {
        let articulo = document.createElement("article");
        articulo.innerHTML = element;
        cuerpo.appendChild(articulo);
        setTimeout(() => {
            cuerpo.removeChild(articulo);
        }, 3000)
    });
}