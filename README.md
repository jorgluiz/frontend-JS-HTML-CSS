<h3>Deploy Heroku (Frontend)</h3>
<h5>Publicando projetos HTML, CSS e JavaScript no HEROKU</h5>
<h6>Passos para o deploy...</h6>

<h3>1) Criar um arquivo php, como index e incluir o arquivo html no projeto, fazendo com que ele seja encapsulado:</h3>

<h6>Exemplo: index.php( < ? php include_once("index.html"); ?>)</h6>


![php](https://user-images.githubusercontent.com/35885897/158030133-b00de94f-fd1e-4d50-86c0-c97bf49a311c.png)

  
<h3>2) Criar outro arquivo ao diretório raiz</h3>
  
<h6>Adicione um arquivo chamado composer.json ao diretório raiz, composer.json</h6>
<h6>Em composer.json , adicione a seguinte linha: { } </h6>
  
![compose](https://user-images.githubusercontent.com/35885897/158030567-281d5326-7786-4380-92dc-6b305dcd7baf.jpg)
  
  saber mais sobre o porquê desses arquivos. Aqui está dois artigos fala sobre <a href="https://www.dio.me/articles/publicando-projetos-htmljavascript-e-css-no-heroku">01artigo<a/>  <a href="https://gist.github.com/wh1tney/2ad13aa5fbdd83f6a489">02artigo<a/>  referências


<h3>OBS: deploy sem o arquivo compose.json</h3>
 
  <h6>Veja com o arquivo PHP ele detecta mas não o compose.json</h6>
 
![detect](https://user-images.githubusercontent.com/35885897/158030912-603148be-ee00-4b92-8f59-2737c183cd31.png)
