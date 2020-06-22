const Home = () => import('../views/home');
import InfoPage from "../views/home/InfoPage.vue";
import ResultPage from "../views/home/ResultPage.vue";
export default [{

    path: "/",
    name: "InfoPage",
    component: InfoPage

},
{
    path: "/Result",
    name: "ResultPage",
    component: ResultPage
}
];
