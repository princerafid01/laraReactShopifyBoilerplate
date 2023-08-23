import { Button, FormLayout, Layout, Page, RangeSlider } from "@shopify/polaris";
import useAxios from "./hooks/useAxios.js";


const App = () => {
    const {axios} = useAxios();
    const [options, setOptions] = useState({count: 5});
    const handleProductCountChange = useCallback(
        (value) => setOptions((prevOptions) => ({...prevOptions, count: value}))
    );

    // Dummy API Call
    const createFakeProducts = useCallback( async() => {
        const {data} = await axios.post("/products", options);
        console.log("Axios Says: ", data.msg);
    }, [options]);

    return (
            <Page>
                <Layout>
                    <Layout.Section>
                        <FormLayout>
                            <h1>Hello World</h1>
                        </FormLayout>
                    </Layout.Section>
                </Layout>
            </Page>
    );
}

export default App;
