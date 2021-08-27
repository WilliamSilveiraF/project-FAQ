var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');


 /*Para todo os "accordionItemHeading"(accHD), quando o evento 'click' for disparado, 
 ativar a função "function toggleItem()"*/
for (i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    /*O Elemento que disparou a função é algum accHD (accordionItemHeading) */
    /*A variável "itemClass" é igual a Classe do pai do elemento que disparou função */
    var itemClass = this.parentNode.className;

    for (i = 0; i < accItem.length; i++) {
        /*sempre que o evento for disparado, para todos os itens de classe "accordionItem",
        atribua as clases "accordionItem" e "close"*/
        accItem[i].className = 'accordionItem close';
    }
    /*se as classes do pai do elemento que disparou for "accordionItem close",
    atribua as classes ao pai do elemento para "accordionItem open"*/
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }

    /*A varíavel "accClickHD" é igual a Classe do elemento que disparou a função*/
    var accClickHD = this.className;

    /*sempre que o evento for disparado, para todos os itens com classe "accordionItemHeading",
    atribua as classes "accordionItem Heading semBold"*/
    for (i = 0; i < accHD.length; i++) {
      accHD[i].className = 'accordionItemHeading semBold';
    }

    /*se a classe do elemento que disparou for "accordionItemHeading semBold",
    atribua a classe accordionItemHeading comBold*/
    if (accClickHD == 'accordionItemHeading semBold') {
      this.className = 'accordionItemHeading comBold';
    }
}

/*sempre que minha função for disparada todos os meus "H2" recebam a classe "sem bold"*/

/*se a classe do pai do meu elemento ("H2") for "semBold", atribua ao meu "H2"
que foi disparado a classe "comBold*/
