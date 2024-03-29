<h1 align="center" dir="auto"><a id="user-content-ui-clone---discord" class="anchor" aria-hidden="true" href="#ui-clone---discord"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>
User - registration
</h1>
<p align="center" dir="auto">Register users (complete) for study purposes.</p>

<p align="center" dir="auto">Deployed <a href="https://frontend-on.herokuapp.com/index.html" rel="nofollow">here</a>.</p>

<p align="center" dir="auto">Back-End <a href="https://github.com/jorgluiz/backend-node.JS" rel="nofollow">here</a>.</p>

<h2 dir="auto"><a id="user-content-participants" class="anchor" aria-hidden="true" href="#participants"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Participants</h2>

<table>
<thead>
<tr>
<th align="center"><a href="https://github.com/jorgluiz"><img src="https://avatars.githubusercontent.com/u/35885897?v=4" width="75px;" style="max-width: 100%;"></a></th>
</tr>
</thead>
</table>

<p dir="auto">| <a href="https://github.com/jorgluiz">Jorge Luiz</a></p>

<h2 dir="auto"><a id="user-content-techs" class="anchor" aria-hidden="true" href="#techs"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Techs</h2>

<ul class="contains-task-list">
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox" checked=""> JavaScript</li>
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox" checked=""> HTML</li>
<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox" checked=""> CSS</li>
</ul>



![p](https://user-images.githubusercontent.com/35885897/180643181-b2261000-f2e3-42d3-bd1d-1db6040d5f3d.png)










<h3>Deploy Heroku (Frontend)</h3>
<h5>Subindo projeto no HEROKU</h5>
<h6>passo a passo deploy</h6>

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
  
  
<h2>depois de criar os arquivos, agora vamos fazer o deploy do frontend</h3>
  
  <h3>1) vá no site da HEROKU</h3>

 <h6>Agora clique em New e depois Create new app</h6>
 <h6>Coloque um nome único</h6>

<h3>2) depois do projeto criado e com o nome vamos fazer o deploy</h3>
  
  
 <h6> segue o passo a passo </h6>
  
 ![deploy hereku](https://user-images.githubusercontent.com/35885897/158031516-fb510cd9-c84e-44a7-9894-24b1021ca6e8.png)
  
  
  
  
  
<h1>Outra forma de deploy com static</h1>
<h3>buildpack projetado para hospedar conteúdo estático.</h3>
<h6>buildpacks:set https://github.com/heroku/heroku-buildpack-static.git</h6>
E adicione uma indicação de qual diretório contém seus ativos estáticos:static.json

{"root":"public"}
  
referência: Deploy static HTML, CSS and JS using Express <a href="https://www.youtube.com/watch?v=FnMglnp4rKI&ab_channel=sparxsys">Deploy static </a>

  
  
