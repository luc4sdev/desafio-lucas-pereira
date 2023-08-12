class CaixaDaLanchonete {

    constructor() {
        this.produtos = {
            cafe: 3.00,
            chantily: 1.50,
            suco: 6.20,
            sanduiche: 6.50,
            queijo: 2.00,
            salgado: 7.25,
            combo1: 9.50,
            combo2: 7.50,
        }

        this.metodosDePagamento = {
            dinheiro: 'dinheiro',
            credito: 'credito',
            debito: 'debito',
        }
    }



    calcularValorDaCompra(metodoDePagamento, itens) {

        let total = 0;

        let cafePedido = false;
        let chantilyPedido = false;

        let sanduichePedido = false;
        let queijoPedido = false;

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        for (const item of itens) {
            const [produto, quantidade] = item.split(',');

            if (this.produtos.hasOwnProperty(produto)) {

                if (produto === 'cafe') {
                    cafePedido = true;
                }
                if (produto === 'chantily') {
                    chantilyPedido = true;
                }

                if (produto === 'sanduiche') {
                    sanduichePedido = true;
                }
                if (produto === 'queijo') {
                    queijoPedido = true;
                }

                if (Number(quantidade) === 0) {
                    return "Quantidade inválida!";
                }

                total += this.produtos[produto] * Number(quantidade);
            } else {
                return "Item inválido!"
            }
        }

        if (chantilyPedido && !cafePedido) {
            return "Item extra não pode ser pedido sem o principal"
        }

        if (queijoPedido && !sanduichePedido) {
            return "Item extra não pode ser pedido sem o principal"
        }

        if (this.metodosDePagamento.hasOwnProperty(metodoDePagamento)) {

            if (this.metodosDePagamento[metodoDePagamento] === 'dinheiro') {
                total = total - total * 0.05;

            } else if (this.metodosDePagamento[metodoDePagamento] === 'credito') {
                total = total + total * 0.03;

            } else if (this.metodosDePagamento[metodoDePagamento] === 'debito') {
                total = total;

            }

        } else {
            return "Forma de pagamento inválida!";
        }



        return `${total.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2})}`
    }

}

export {
    CaixaDaLanchonete
};

new CaixaDaLanchonete().calcularValorDaCompra('debito', ['chantily,1']);