# Back-end desafio JMV

Neste projeto optei por utilizar uma estrutura de sistema diferente do MVC monolito convencional. Com esta abordagem separando o back-end do front-end fica mais simples reaproveitar o mesmo código do back-end para várias aplicações front-end, por exemplo mobile e web.

Decidi também utilizar JavaScript pois esta é uma tarefa que tem um prazo apertado para ser concluída e como minhas habilidades em TypeScript estão um pouco enferrujadas optei pela situação mais simples.

Os pacotes que decidi utilizar foram:

* Expressjs -> Escolhi utilizar este pacote pois é o que mais utilizei em meus projetos de back-end e facilita bastante o processo de desenvolvimento;
* Cors -> Esse pacote seta automaticamente os headers para permitir que os arquivos do servidor sejam acessados externamente de outras origens;
* dotenv -> Pacote utilizado para carregar arquivos de configuração com assinatura .env, que são arquivos de ambiente não acessíveis pelos usuários comuns (quando o servidor está configurado corretamente);
* Nodemon -> Um pacote que auxilia no processo de desenvolvimento pois re-executa o servidor toda vez que algum arquivo é alterado;
* Mongoose -> Um ODM que já usei em outros projetos e que facilita criar os objetos que serão salvos na base de dados MongoDB;
* HPP -> Módulo de segurança que evita a poluição de parâmetros na query ou no body da requisição;
* Helmet -> Um dos pacotes mais recomendados em relação à segurança, este elemento atua, segundo a própria documentação, ajustando diversos headers de requisições padrão do Nodejs com Express;
* Morgan -> Mostra informações a respeito das requisições realizadas ao servidor;
* express-rate-limit -> Um middleware utilizado para limitar a quantidade de requisições que podem ser feitas por um determinado host. Esse pacote é utilizado para evitar ataques de DDOS;

Para executar o banco de dados MongoDB em uma instância local:

```bash
  mongod
  mongo
```

Para executar o projeto:

```bash
  # dev env
  npm run dev

  # prod env
  npm start
```

Observação: Não ficou claro para mim a parte de **Autenticação**. Não consegui entender quais métodos do CRUD seriam limitados a cada tipo de usuário.

---
Vinícius Gajo Marques Oliveira, 2020.