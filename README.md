## Instalações iniciais

git config —global [user.name](http://user.name) “Mateus Macedo”

git config —global [user.email](http://user.email) “maateusmacedo@gmail.com”

## Estados do Git

![alt text](image-1.png)

## Comandos

git clone ➩ *(aqui cola o link do repositório que deseja colar na máquina local)*

git init ➩ *(para iniciar o git dentro da pasta)*

git add {nome do arquivo} ➩ *(comando para adicionar o projeto em seu estado atual para a área de staged, antes de commitar)*

git rm --cached {nome do arquivo} ➩ *(comando para restirar um arquivo da área de staged)*

git diff ➩ *(comando para ver o que mudou no arquivo, em vermelho aparece o que foi excluído e em verde o que foi acrescentado)*

git commit  -m {mensagem} ➩*(comando para commitar o arquivo, colocando uma mensagem sobre o que foi commitado)*

git log ➩ *(esse comando traz um histórico dos últimos commits feitos)*

git restore {nome do arquivo} ➩ *(remove a última alteração feita no arquivo, mas continua na área de staged)*

git restore --staged {nome do arquivo} ➩ *(retorna o arquivo para a área de modified, para continuar criando mudanças)*

git push origin master ➩ *(para mandar o arquivo para o repostório remoto, como o GitHub)*

git remote add origin ➩ *(link do repositório do GitHub)*

git pull ➩ *(comando para puxar as alterações feitas diretamente no repositório remote, como o GitHub e trazer para a máquina que estou trabalhando)*

git fetch ➩ *(esse comando serve para visualizar as informações que possuem no repositório remoto, como o GitHub, antes de copiar na máquina local. esse comando pode ser mais seguro do que utilizar o 'git pull' direto)* 
    Depois desse comando git fetch, utiliza-se o comando 'git diff origin/master' para visualizar no terminal/prompt de comando as informações que serão adicionadas.

## Branches
    são ramificações que podemos fazer no nosso código

git branch {nome da branch} ➩ *(código para criar uma nova branch)*

git log --oneline --decorate ➩ *(esse comando nos infroma onde está o HEAD do arquivo, ou seja, em qual ponto estamos no projeto)*

git checkout {nome da branch que queremos ir} ➩ *(esse comando nos permite mudar o HEAD do projeto, para irmos para outra branch)*

![alt text](image-1.png)

## Gitignore
    é um arquivo dentro do projeto que fará com que o git ignore partes do projeto, para isso precisamos criar um arquivo .gitignore dentro da pasta do nosso projeto. O gitignore lê arquivos JSON