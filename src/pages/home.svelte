<Page name="home">
  

  <main>
    <div class="login-container">

      <div class="box">
        <div class="grid">

          <!-- grid 1 -->
          <div>
            <img src="icons/128x128.png" width="80" alt="">
            <div class="content">
              <h1>Accedi</h1>
              {#if !invio}
                <span>Utilizza il tuo Account Google</span>
              {:else}
                <div class="email"><Icon material="account_circle"/>  {email}</div>
              {/if}
            </div>
          </div>

          <!-- grid 2 -->
          {#if !invio}
            <div>
              <div class="input">
                <List>
                  <ListInput
                    required
                    outline
                    floatingLabel
                    label="Indirizzo email o numero di telefono"
                    type="email"
                    placeholder=""
                    on:load:value={email}
                    bind:value={email}
                    style="color:white"
                    >
                  </ListInput>
                  
                  <div class="forgot">
                    <div class="link">Non ricordi  l'indirizzo email?</div>
                  </div>
                </List>
                
                <div class="alert">
                  Non si tratta del tuo computer? Utilizza la modalità ospite per accedere privatamente.
                  <span class="link">Scopri di più sull'utilizzo della modalità Ospite</span>
                </div>

                <div class="buttons">
                  <div class='button'>Crea un account</div>
                  <div class='button' on:click={validate_email}>Avanti</div>
                </div>
              </div>
            </div>
          {:else}
            <div>
              <div class="input">
                <div class="alert">Per continuare, verifica innanzitutto la tua identità</div>
                <List>
                  <ListInput
                    required
                    outline
                    floatingLabel
                    label="Inserisci la password"
                    type={show ? "text" :"password"}
                    on:load:value={password}
                    bind:value={password}
                    style="color:white"
                    >
                  </ListInput>
                  <ListItem checkbox title="Mostra password" name="password" on:click={()=>{show = show ? false : true}} />
                </List>

                <div class="buttons">
                  <div class='button'>Prova un altro metodo</div>
                  <div class='button' on:click={validate_user}>Avanti</div>
                </div>
              </div>
            </div>
          {/if}

        </div>
      </div>
  
      <div class="footer">
        <div>
          Italiano
        </div>
        <div>
          <span>Guida</span>
          <span>Privacy</span>
          <span>Termini</span>
        </div>
      </div>
  
    </div>
  </main>

</Page>
<script>
  import {
    Page,
    Navbar,
    NavTitle,
    NavTitleLarge,
    Link,
    Toolbar,
    Block,
    ListInput,
    ListItem,
    List,
    Icon,
    f7
  } from 'framework7-svelte';

  let email="", password="", invio=false, show=false

  function validate_email(){
    invio=true
  }
  function validate_user(){
    console.log(email)
    console.log(password)
  }
</script>

<style>
  *{
    font-size: 100%;
  }
  @media (min-width:960px){
    .login-container{
      width: 1040px;
      margin: 40px;
    }
    .box{
      border-radius: 28px;
      padding: 20px;
    }
  }

  @media (max-width:960px){
    .login-container{
      width: 100vw;
    }
    .box{
      border-radius: 28px;
      padding: 20px;
    }
    main{
      background-color: white !important;
    }
  }
  @media (max-width:770px){
    .grid{
      display: block !important;
    }
  }
  .box{
    background-color: white;
  }
  .box .content{
    margin-left: 10px;
  }
  .box .content h1{
    font-weight: 400;
    font-size: 300%;
    margin-top: 0;
    margin-bottom: 10px;
  }
  main{
    background-color: #f0f4f9;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .grid{
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .forgot{
    margin-left: 10px;
    font-size: 90%;
  }
  .input{
    margin-top: 80px;
  }

  .link{
    color: #2b5fd1;
    border-radius: 10px;
    padding: 0px;
    padding-left: 5px;
    padding-right: 5px;
    transition: 0.2s;
  }
  .link:hover{
    background-color: #ecf2fc;
  }

  .alert{
    margin-left: 15px;
    margin-bottom: 30px;
    margin-top: 45px;
    color: rgb(95, 93, 93);
  }

  .buttons{
    display: flex;
    justify-content: right;
    margin: 20px;
  }
  .buttons .button{
    display: inline-block;
    border: 0;
    border-radius: 1000px;
    font-size: 100%;
    background-color: #ffffff;
    transition: 0.2s;
    padding-left: 25px;
    padding-right: 25px;
  }
  .buttons .button:first-child{
    color: #2b5fd1;
    margin-right: 20px;
  }
  .buttons .button:first-child:hover{
    background-color: #ecf2fc;
  }
  .buttons .button:nth-child(2){
    background-color: #2b5fd1;
    color: white;
  }
  .buttons .button:nth-child(2):hover{
    background-color: #204799;
  }

  .footer{
    padding: 15px;
    display: flex;
    justify-content: space-between;
    font-size: 90%;
  }
  .footer div:nth-child(2) span{
    padding-left: 15px;
    padding-right: 15px;
  }

  .email{
    border: 1px solid black;
    display: inline-block;
    border-radius: 1000px;
    padding-right: 10px;
    font-size: 110%;
  }
</style>