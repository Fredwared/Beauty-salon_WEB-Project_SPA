export default {

    namespaced: true,

    state:{
        loadPriceResponse:{
            ok:         null,
            status:     null,
            statusText: null,
            url:        null,
            data:       [],
        },

    },

    getters:{

    },

    mutations:{

        LoadPrice(state, formData){

            let token = localStorage.getItem('token')

            Vue.http.post('/api/price?token=' + token, formData).then(response=>{
                state.loadPriceResponse = response;

                console.log('response: ')
                console.log(response)

            }, error=>{
                state.loadPriceResponse = error;

                console.log('error: ')
                console.log(error)
            });

        },

    },

    actions:{

        LoadPrice(context, formData){
            context.commit('LoadPrice', formData);
        },

    },

}
