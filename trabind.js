import readLine from 'readline-sync'; 
import chalk from 'chalk'; 

function ListadoCSS() {
const valores = []; 
let input = "";

console.log(`${'\n'} -→ digite ${chalk.bgRed('sair')} quando finalizar, para gerar a sua lista ${'\n'}`) 
while(input !== 'sair'){
    valores.push(input);
    input = readLine.question(chalk.bold.hex('#ffff00')("Digite uma propriedade do CSS: "))
    .toLocaleLowerCase();
}

console.table(`${'\n'} ${chalk.bold('Lista de propriedades do CSS')} ${chalk.bgHex('#00ff15')(valores.sort().join('\n• '))}`);

}

ListadoCSS();