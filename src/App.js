import { Fragment } from 'react'; // Dùng chỉ để chứa, ko sinh ra thẻ thật trong Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        // const Layout = route.layout === null ? Fragment : DefaultLayout; // neu ko co layout thi mac dinh lay DefaultLayout
                        const Page = route.component;

                        let Layout = DefaultLayout;
                        if(route.layout) {
                          Layout =  route.layout;
                        } else if(route.layout === null) {
                          Layout = Fragment;
                        }

                        return ( 
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
