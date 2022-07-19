import { createStore } from "vuex"
import axiosClient from '../axios'


// const tmpSurveys = [
//     {
//         id: 100,
//         title: 'Deinen Flores',
//         slug:'deinen-flores',
//         status: 'draft',
//         image: 'https://www.google.com/search?q=twig+image&rlz=1C1VDKB_enPH947PH947&sxsrf=ALiCzsZJzsa4pSNzOTrfNpcGUFMwPr6iJQ:1657011096284&tbm=isch&source=iu&ictx=1&vet=1&fir=n06B1limwhiFJM%252CD5vMfrlUKiJRkM%252C_%253BspPbf0I8mFyyjM%252CavR4m2OCDTt91M%252C_%253Bs86zJFm7xjSeZM%252C2CjPGptx7iZjZM%252C_%253BsJKg9cY30hUFRM%252CliuCLewdOyzCNM%252C_%253B4DCPx_x2_HNu8M%252CD5vMfrlUKiJRkM%252C_%253BnFjCenPg2cX1BM%252CVRZUOqHNnAA94M%252C_%253BggGYkwkO6g74kM%252CB25KtxXFKmVzeM%252C_%253BeHu_k_mPfhdBcM%252CD5vMfrlUKiJRkM%252C_%253Be12Aq-wx5aHzZM%252CVqNXy58HxjVZWM%252C_%253BLV7M1tIwLzQdjM%252CYwojwD7x0-qs0M%252C_%253BQa_laEVHyq0qLM%252CD5vMfrlUKiJRkM%252C_%253BN1Rl-oA2fiKtuM%252Cx0F6rsrqwia0IM%252C_%253BFsvDimT7T-v_UM%252C1U0s7DB29vw-KM%252C_&usg=AI4_-kSHmHn1v06_8lcVTglRdtyM5TApRg&sa=X&ved=2ahUKEwjLqaGur-H4AhUVUd4KHU23AHwQ9QF6BAgFEAE#imgrc=n06B1limwhiFJM',
//         description: 'Twig Tree',
//         created_at: '2022-7-5 18:00:00',
//         updated_at: '2022-7-5 18:00:00',
//         expire_date: '2022-12-31 18:00:00',
//         questions:[
//             {
//                 id:1,
//                 type: 'select',
//                 question:'From which country are you?',
//                 description:null,
//                 data:{
//                     options:[
//                         {uuid:'7cd47338-bf56-4e09-bf59-db92f343c189',text:'USA'},
//                         {uuid:'870950cf-c0c9-4cb0-a8ab-124d223d28ad',text:'Georgia'},
//                         {uuid:'cc4634a1-fcfb-43b7-9a95-24f3cac9d23d',text:'Germany'},
//                         {uuid:'533d7c35-30c1-4d14-a96f-5c2a01dd3d14',text:'India'
//                         },
//                     ],
//                 },
//             },
//             {
//                 id:2,
//                 type: 'checkbox',
//                 question:'Language?',
//                 description:'Lorem Tree',
//                 data:{
//                     options:[
//                         {uuid:'7cd41233-bf56-4e09-bf59-db92f343c189',text:'Java'},
//                         {uuid:'87091233-c0c9-4cb0-a8ab-124d223d28ad',text:'React'},
//                         {uuid:'cc461233-fcfb-43b7-9a95-24f3cac9d23d',text:'Js'},
//                         {uuid:'533d1233-30c1-4d14-a96f-5c2a01dd3d14',text:'Vue'
//                         },
//                     ],
//                 },
//             },
//             {
//                 id:3,
//                 type: 'checkbox',
//                 question:'Framework?',
//                 description:'Lorem Tree',
//                 data:{
//                     options:[
//                     {uuid:'7cd42222-bf56-4e09-bf59-db92f343c189',text:'Vue'},
//                     {uuid:'87092222-c0c9-4cb0-a8ab-124d223d28ad',text:'React'},
//                     {uuid:'cc463222-fcfb-43b7-9a95-24f3cac9d23d',text:'Js'},
//                     {uuid:'533d2222-30c1-4d14-a96f-5c2a01dd3d14',text:'Vue'}]
//                 }
//             },
//             {
//                 id:4,
//                 type: 'radio',
//                 question:'Laravel Framework?',
//                 description:'Lorem Tree',
//                 data:{
//                     options:[
//                     {uuid:'7cd4f233-bf56-4e09-bf59-db92f343c189',text:'1'},
//                     {uuid:'8709f233-c0c9-4cb0-a8ab-124d223d28ad',text:'2'},
//                     {uuid:'cc46f233-fcfb-43b7-9a95-24f3cac9d23d',text:'3'},
//                     {uuid:'533df233-30c1-4d14-a96f-5c2a01dd3d14',text:'4'}]
//                 }
//             },
//             {
//                 id:5,
//                 type: 'checkbox',
//                 question:'Project?',
//                 description:'Lorem Tree',
//                 data:{
//                     options:[
//                     {uuid:'7cd41233-bf56-4e09-bf59-db92f343c189',text:'Java'},
//                     {uuid:'87091233-c0c9-4cb0-a8ab-124d223d28ad',text:'React'},
//                     {uuid:'cc461233-fcfb-43b7-9a95-24f3cac9d23d',text:'Js'},
//                     {uuid:'533d1233-30c1-4d14-a96f-5c2a01dd3d14',text:'Vue'}]
//                 }
//             },
//             {
//                 id:6,
//                 type: 'text',
//                 question:'Fave Food?',
//                 description:null,
//                 data:{}
//             },
//         ],
//     },
//     {
//         id:200,
//         title: 'Laravel 8',
//         slug: 'laravel8',
//         status: 'active',
//         image: 'https://www.google.com/search?q=twig+image&rlz=1C1VDKB_enPH947PH947&sxsrf=ALiCzsZJzsa4pSNzOTrfNpcGUFMwPr6iJQ:1657011096284&tbm=isch&source=iu&ictx=1&vet=1&fir=n06B1limwhiFJM%252CD5vMfrlUKiJRkM%252C_%253BspPbf0I8mFyyjM%252CavR4m2OCDTt91M%252C_%253Bs86zJFm7xjSeZM%252C2CjPGptx7iZjZM%252C_%253BsJKg9cY30hUFRM%252CliuCLewdOyzCNM%252C_%253B4DCPx_x2_HNu8M%252CD5vMfrlUKiJRkM%252C_%253BnFjCenPg2cX1BM%252CVRZUOqHNnAA94M%252C_%253BggGYkwkO6g74kM%252CB25KtxXFKmVzeM%252C_%253BeHu_k_mPfhdBcM%252CD5vMfrlUKiJRkM%252C_%253Be12Aq-wx5aHzZM%252CVqNXy58HxjVZWM%252C_%253BLV7M1tIwLzQdjM%252CYwojwD7x0-qs0M%252C_%253BQa_laEVHyq0qLM%252CD5vMfrlUKiJRkM%252C_%253BN1Rl-oA2fiKtuM%252Cx0F6rsrqwia0IM%252C_%253BFsvDimT7T-v_UM%252C1U0s7DB29vw-KM%252C_&usg=AI4_-kSHmHn1v06_8lcVTglRdtyM5TApRg&sa=X&ved=2ahUKEwjLqaGur-H4AhUVUd4KHU23AHwQ9QF6BAgFEAE#imgrc=n06B1limwhiFJM',
//         description: 'Twig Tree',
//         created_at: '2022-7-5 18:00:00',
//         updated_at: '2022-7-5 18:00:00',
//         expire_date: '2022-12-31 18:00:00',
//         questions:[],
//     },
//     {
//         id:300,
//         title: 'Vue 3',
//         slug: 'vue3',
//         status: 'active',
//         image: 'https://www.google.com/search?q=twig+image&rlz=1C1VDKB_enPH947PH947&sxsrf=ALiCzsZJzsa4pSNzOTrfNpcGUFMwPr6iJQ:1657011096284&tbm=isch&source=iu&ictx=1&vet=1&fir=n06B1limwhiFJM%252CD5vMfrlUKiJRkM%252C_%253BspPbf0I8mFyyjM%252CavR4m2OCDTt91M%252C_%253Bs86zJFm7xjSeZM%252C2CjPGptx7iZjZM%252C_%253BsJKg9cY30hUFRM%252CliuCLewdOyzCNM%252C_%253B4DCPx_x2_HNu8M%252CD5vMfrlUKiJRkM%252C_%253BnFjCenPg2cX1BM%252CVRZUOqHNnAA94M%252C_%253BggGYkwkO6g74kM%252CB25KtxXFKmVzeM%252C_%253BeHu_k_mPfhdBcM%252CD5vMfrlUKiJRkM%252C_%253Be12Aq-wx5aHzZM%252CVqNXy58HxjVZWM%252C_%253BLV7M1tIwLzQdjM%252CYwojwD7x0-qs0M%252C_%253BQa_laEVHyq0qLM%252CD5vMfrlUKiJRkM%252C_%253BN1Rl-oA2fiKtuM%252Cx0F6rsrqwia0IM%252C_%253BFsvDimT7T-v_UM%252C1U0s7DB29vw-KM%252C_&usg=AI4_-kSHmHn1v06_8lcVTglRdtyM5TApRg&sa=X&ved=2ahUKEwjLqaGur-H4AhUVUd4KHU23AHwQ9QF6BAgFEAE#imgrc=n06B1limwhiFJM',
//         description: 'Twig Tree',
//         created_at: '2022-7-5 18:00:00',
//         updated_at: '2022-7-5 18:00:00',
//         expire_date: '2022-12-31 18:00:00',
//         questions:[],
//     },
//     {
//         id:400,
//         title: 'Tailwind 3',
//         slug: 'tailwind3',
//         status: 'active',
//         image: 'https://www.google.com/search?q=twig+image&rlz=1C1VDKB_enPH947PH947&sxsrf=ALiCzsZJzsa4pSNzOTrfNpcGUFMwPr6iJQ:1657011096284&tbm=isch&source=iu&ictx=1&vet=1&fir=n06B1limwhiFJM%252CD5vMfrlUKiJRkM%252C_%253BspPbf0I8mFyyjM%252CavR4m2OCDTt91M%252C_%253Bs86zJFm7xjSeZM%252C2CjPGptx7iZjZM%252C_%253BsJKg9cY30hUFRM%252CliuCLewdOyzCNM%252C_%253B4DCPx_x2_HNu8M%252CD5vMfrlUKiJRkM%252C_%253BnFjCenPg2cX1BM%252CVRZUOqHNnAA94M%252C_%253BggGYkwkO6g74kM%252CB25KtxXFKmVzeM%252C_%253BeHu_k_mPfhdBcM%252CD5vMfrlUKiJRkM%252C_%253Be12Aq-wx5aHzZM%252CVqNXy58HxjVZWM%252C_%253BLV7M1tIwLzQdjM%252CYwojwD7x0-qs0M%252C_%253BQa_laEVHyq0qLM%252CD5vMfrlUKiJRkM%252C_%253BN1Rl-oA2fiKtuM%252Cx0F6rsrqwia0IM%252C_%253BFsvDimT7T-v_UM%252C1U0s7DB29vw-KM%252C_&usg=AI4_-kSHmHn1v06_8lcVTglRdtyM5TApRg&sa=X&ved=2ahUKEwjLqaGur-H4AhUVUd4KHU23AHwQ9QF6BAgFEAE#imgrc=n06B1limwhiFJM',
//         description: 'Twig Tree',
//         created_at: '2022-7-5 18:00:00',
//         updated_at: '2022-7-5 18:00:00',
//         expire_date: '2022-12-31 18:00:00',
//         questions:[],
//     },
// ]

const store = createStore({
    state: {
        user:{
            data: {},
            token: sessionStorage.getItem('TOKEN')
        },
        dashboard:{
            loading:false,
            data:{}
        },
        currentSurvey: {
            data: {},
            loading: false,
        },
        // surveys:[...tmpSurveys],
        surveys:{
            loading: false,
            links:[],
            data:[]
        },
        questionTypes: ['text','select','radio','checkbox','textarea'],
        notification: {
            show:false,
            type: null,
            message: null
        }
    },
    getters: {},
    actions: {
        getDashboardData({commit}) {
            commit('dashboardLoading', true)
            return axiosClient.get(`/dashboard`)
            .then((res) => {
                commit('dashboardLoading', false)
                commit('setDashboardData', res.data)
                return res;
                })
                .catch(error => {
                commit('dashboardLoading', false)
                return error;
                })
        
            },
        getSurvey({ commit }, id) {
            commit("setCurrentSurveyLoading", true);
            return axiosClient
                .get(`/survey/${id}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data);
                    commit("setCurrentSurveyLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false);
                    throw err;
                });
            },

        saveSurvey({commit}, survey){
            delete survey.image_url;
            let response;
            if (survey.id) {
                response = axiosClient
                    .put(`/survey/${survey.id}`, survey)
                    .then((res) => {
                        commit('setCurrentSurvey', res.data)
                        return res;
                    });
                } else {
                    response = axiosClient.post("/survey", survey).then((res) => {
                    commit('setCurrentSurvey', res.data)
                    return res;
                    });
                }
            
                return response;
            },

        deleteSurvey({}, id){
            return axiosClient.delete(`/survey/${id}`);
        },

        getSurveys({ commit }, {url = null} = {}) {
            commit('setSurveysLoading', true)
            url = url || "/survey";
            return axiosClient.get(url).then((res) => {
                commit('setSurveysLoading', false)
                commit("setSurveys", res.data);
                return res;
            });
        },

        getSurveyBySlug({ commit }, slug) {
            commit("setCurrentSurveyLoading", true);
            return axiosClient
                .get(`/survey-by-slug/${slug}`)
                .then((res) => {
                    commit("setCurrentSurvey", res.data);
                    commit("setCurrentSurveyLoading", false);
                    return res;
                })
                .catch((err) => {
                    commit("setCurrentSurveyLoading", false);
                    throw err;
                });
        },
        
        saveSurveyAnswer({commit},{surveyId, answers}){
            return axiosClient.post(`/survey/${surveyId}/answer`, {answers});       
        },

        register({ commit }, user) {
            return axiosClient.post('/register', user)
            .then(({data}) => {
                commit('setUser',data)
                return data;
            })
        },

        login({ commit }, user) {
            return axiosClient.post('/login', user)
            .then(({data}) => {
                commit('setUser',data)
                return data;
            })
        },

        logout({commit}) {
            return axiosClient.post('/logout')
            .then(response => {
                commit('logout')
                return response;   
            })
        }
    },
    mutations: {
        dashboardLoading: (state, loading) => {
            state.dashboard.loading = loading;
        },
        setDashboardData: (state, data) => {
            state.dashboard.data = data;
        },
        setCurrentSurveyLoading: (state, loading) => {
            state.currentSurvey.loading = loading;
        },

        setSurveysLoading: (state, loading) => {
            state.surveys.loading = loading;
        },

        setCurrentSurvey: (state, survey) => {
            state.currentSurvey.data = survey.data;
        },

        setSurveys: (state, surveys) => {
            state.surveys.links = surveys.meta.links;
            state.surveys.data = surveys.data;
        },

        // saveSurvey:(state,survey) => {
        //     state.surveys = [...state.surveys, survey.data]
        // },

        // updateSurvey:(state,survey) => {
        //     state.surveys = state.surveys.map((s) => {
        //         if(s.id == survey.data.id) {
        //             return survey.data;
        //         }
        //         return s;
        //     });
        // },
        logout: (state) => {
            state.user.data = {};
            state.user.token = null;
            sessionStorage.removeItem('TOKEN');
        },
        setUser: (state, userData) => {
            state.user.token = userData?.token;
            state.user.data = userData?.user;
            sessionStorage.setItem('TOKEN', userData?.token);
        },
        notify: (state, {message, type}) => {
            state.notification.show = true;
            state.notification.type = type;
            state.notification.message = message;
            setTimeout(() => {
                state.notification.show = false;
            }, 3000)
        }
    },
    modules: {},

});

export default store;