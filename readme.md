# Descrição 

Para criar esta composição interativa, a minha referência principal foram os pin art toys. Com isto, decidi criar uma composição com vários círculos, uns mais perto e outros mais afastados, que seguissem o rato e mudassem de cor sempre que se clica e se larga o botão do rato.

Comecei por criar o canvas com createCanvas e usei o noStroke na função setup para os círculos ficarem sem o contorno que o p5.js desenha por defeito. Decidi colocar o noStroke nesta função porque é uma definição que se mantém ativa, logo, só precisa de ser executada uma vez.

Criei três variáveis com let no início, uma para cada grupo de círculos (corPequeno, corMedio e corFundo). Fi-lo fora das funções para que a cor sorteada ficasse guardada e pudesse ser utilizada tanto no draw como nas funções do rato. Decidi usar let e não const porque queria que as cores fossem aleatórias, daí só ter atribuído cor dentro do setup, já que as funções color e random não iriam funcionar mais cedo.

Para obter cores sorteadas, escrevi a minha própria função, cores(), que atribui a cada variável uma cor utilizando um fator random. O random sorteia separadamente os valores de vermelho, verde e azul, num intervalo entre 80 e 255, para evitar cores demasiado escuras, que desapareceriam contra o fundo quase preto. Com a função cores(), faço com que as cores apareçam logo no primeiro frame, e também no mousePressed e mouseReleased. Preferi utilizar esta opção em vez de mouseIsPressed, que ficaria ligado durante todo o tempo em que o botão estaria carregado, porque queria uma mudança rápida e pontual a cada clique, e não um estado contínuo.

No draw uso o background (20) para apagar o frame anterior. Sem este comando, os círculos desenhados anteriormente ficavam no ecrã e os círculos do fundo deixavam rasto quando o rato se movia. Defini a constante espaço, com o valor 40, que guarda a distância entre os centros dos círculos vizinhos e criei uma constante, já que o valor aparece várias vezes, assim posso alterar a grelha alterando apenas uma linha.

Para desenhar a grelha no fundo, criei dois ciclos, um dentro do outro. Desta forma o primeiro percorre as colunas (x) e o segundo, as linhas (y), assim a combinação corresponde a um círculo. Ambos começam em espaço / 2, para o primeiro círculo ficar no centro e não colado à margem e vão avançando de espaço em espaço até chegar ao limite do canvas, dado por width e height. Fazendo ciclos evito ter de escrever um a um manualmente.

Para cada círculo é calculada a distância do rato com dist(mouseX, mouseY, x, y) e guardo-a na constante d. É usada uma constante já que o valor é necessário em duas condições, e assim, a distância é cálculada só uma vez por cada círculo. Como a constante está dentro deste ciclo de condições, é criada de novo a cada volta, e, com o draw, repete-se continuamente. Isto também permite que distância dos círculos é recalculada a cada frame, de modo a acompanhar o movimento do rato.

Como o exercício tinha como objetivo o uso das condicionais if/else, utilizei o comando para que se a distância for inferior a 100, o círculo é grande e usa corPequeno, se for inferior a 220 é médio e usa corMedio, caso contrário, é pequeno e usa corFundo. Usei esta estrutura porque o programa lê as condições por ordem e para na primeira verdadeira, então o else if só é testado se o primeiro if falhar. Foi assim que consegui associar tanto a cor como o tamanho à proximidade do rato.

Por fim, usei windowResized com resizeCanvas para o canvas se ajustar quando a janela do navegador muda de tamanho.

Todas as linhas de código foram consultadas através do website https://p5js.org/reference/;