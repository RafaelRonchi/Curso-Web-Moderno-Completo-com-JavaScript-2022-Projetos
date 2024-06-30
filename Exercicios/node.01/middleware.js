//middleware patter (chain od responsibility)

const p1 = (cntx, next) => {
    cntx.valor1 = 'mid1';
    next();
}

const p2 = (cntx, next) => {
    cntx.valor2 = 'mid2';
    next(); 
}

const p3 = cntx => ctnx.valor3 = 'mid3'

const exec = (cntx, ...middlewares) => {
    const execPass = indice => {
        middlewares && indice < middlewares.length && middlewares[indice](cntx, () => execPass(indice + 1))
    }
    execPass(0);

}

const cntx = {}
exec(cntx, p1, p2)
console.log(cntx);