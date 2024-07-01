const schedule = require('node-schedule')

// temporizador 5 segundos 11 horas qualquer mês segunda feira
const tarefa1 = schedule.scheduleJob('*/5 * 11 * * 1', function () {
    console.log('Execut Tarefa 1', new Date().getSeconds());
})

// timeout 
setTimeout(function () {
    tarefa1.cancel()
    console.log('cancelando tarefa 1');
}, 20000)



const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)]
regra.hour = 11
regra.second = 2

const tarefa2 = schedule.scheduleJob(regra, function() {
    console.log('Tarefa 2', new Date().getSeconds());
})