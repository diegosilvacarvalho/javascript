let num = [3,5,7,1]
num.length
console.log(`O vetor tem ${num.length} posições`)
console.log(`Nosso vetor é o ${num}`)
num[4] = 9
console.log(`Nosso vetor é o ${num}`)
num.push(20)
console.log(`Nosso vetor é o ${num}`)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`Valor na posição 1 -> ${num[1]}`)

let pos = num.indexOf(5)
console.log(`O valor 5 está na posição ${pos}`)