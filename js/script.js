const app = new Vue(
    {
        el : '#app',
        data : {
            discs : []
        },
        created(){
            axios.get('').then(
                result => {
                    this.discs = result.data.result;
                }).catch((error) => {
                    console.warn(error);
                })
        }
    }
) 