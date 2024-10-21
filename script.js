let deck = []
let option = true

while (option !== '3') {
    let menu = ' quantas cartas no baralho: ' + deck.length + '\n\n'
    menu += 'Escolha uma opção:\n'
    menu += '1 - Adicionar uma carta\n'
    menu += '2 - Puxar uma carta\n'
    menu += '3 - Sair\n'
    option = prompt(menu)
    switch (option) {
        case '1':
            let newCard = prompt('Puxar uma carta:')
            deck.push(newCard) 
            break
        case '2':
            if (deck.length === 0) {
                alert('Não há cartas no baralho.')
            } else {
                let drawnCard = deck.pop() 
                alert('puxar uma carta: ' + drawnCard)
            }
            break
        case '3':
            alert('Programa encerrado.')
            break
        default:
            alert('Opção inválida!')
            break
    }
}
