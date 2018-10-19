/*Imitate users server*/

{
    const user={
        firstName: null,
        lastName:  null,
        userName:  null,
        password:  null,

        /*Methodes*/
        updateUser: function(firstName,lastName,userName,password){
            this.firstName=firstName;
            this.lastName=lastName;
            this.userName=userName;
            this.password=password;
        },
        resetUser: user.updateUser(null,null,null,null),

        

    };

}