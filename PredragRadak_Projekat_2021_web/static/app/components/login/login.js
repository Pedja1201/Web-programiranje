///Logovanje korisnika tako da ostvari pristup podacima(aktivnostima) entiteta koji smo definisali na serveru u metodama 'getAll'
export default {
    template:`
    <!-- Background image -->
<div
    class="bg-image"
    style="
    background-image: url('./pictures/color.jpg');
    height: 100vh;
      ">
<legend>
<form v-on:submit.prevent="login()" class="w-25 p-3 container fade-in">
<h1 style="text-align:center" class="alert alert-primary" role="alert"><em>Login </em></h1>
<div class="form-group" id="boja">
    <label for="form-label">E-mail address</label>
    <input type="email" class="form-control aler alert-primary" v-model="korisnik.email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-warning"><i>Unique e-mail address!</i></small>
</div>

<div class="form-group" id="boja">
    <label for="form-label">Password</label>
    <input type="password" class="form-control aler alert-primary" v-model="korisnik.lozinka" placeholder="Password">
</div>

<div>
    <button type="submit" class="btn btn-outline-success">Sign in</button>
</div>

<div class="alert alert-danger" role="alert" v-if="neuspesanLogin">Neuspešna prijava na sistem!</div>

<div class="dropdown-divider"></div>
<router-link id="boja" class="nav-link active light" to="/korisnici"><em>New around here? Sign up.</em></router-link>
<router-link id="boja" class="nav-link active" to="/korisnici"><em>Forgot password? </em></router-link>

</form>
</legend>
</div>
    `,
    data : function(){
        return {
            korisnik:{
                "email":"",
                "lozinka": ""
            },
            neuspesanLogin: false
        };
    },
    methods:{
        login: function(){
            // console.log(this.korisnik);
            axios.post(`api/login`, this.korisnik).then((response) => {
                this.$router.push("/kupci");
            }, _ => {
                this.neuspesanLogin = true;
            });
        }
    }
}