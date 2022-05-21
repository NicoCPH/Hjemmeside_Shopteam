function Projekter(props) {
    return (
        <div className="projekter">
            <div className="projekter_headline">
               <h1>{props.t("projects.headline")}</h1> 
               <img src={require("../images/img-montage.jpg")} alt="" />
               </div>
            <div className="grids">
            <div className="image_list">
            <ul>
                <lo title="location 3">
                <img className="comp_image" src={require("../images/zalandologo.png")} alt="" />
                </lo>
                <lo title="location 1">
                <img className="comp_image" src={require("../images/kiklogo.jpg")} alt="" />
                </lo>
                <lo title="location 2">
                <img className="comp_image" src={require("../images/jysklogo.png")} alt="" />
                </lo>
                <lo title="location 3">
                <img className="comp_image" src={require("../images/aldilogo.png")} alt="" />
                </lo>
                <lo title="location 3">
                <img className="comp_image" src={require("../images/momalogo.jpg")} alt="" />
                </lo>
                <lo title="location 3">
                <img className="comp_image" src={require("../images/tedilogo.jpg")} alt="" />
                </lo>
                <lo title="location 3">
                <img className="comp_image" src={require("../images/maxilogo.png")} alt="" />
                </lo>
                <lo title="location 3">
                <img className="comp_image" src={require("../images/xxxlutzlogo.jpg")} alt="" />
                </lo>
                <lo title="location 3">
                <img className="comp_image" src={require("../images/colloseumlogo.png")} alt="" />
                </lo>
                <lo title="location 3">
                <img className="comp_image" src={require("../images/zumtobellogo.jpg")} alt="" />
                </lo>
                <lo title="location 3">
                <img className="comp_image" src={require("../images/woolsworthlogo.png")} alt="" />
                </lo>
            </ul>
            </div>
            <section className="img_right_columns">
                <div className="column right">
                    <img src={require("../images/img-montage.jpg")} alt="" />
                    </div>
                    <div className="column_text right">
                        <h3>Case - Lorem ipsum</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem, dolore odio aperiam expedita tempore ab rem quo! Animi ratione optio sit ea dolorum explicabo et eius itaque ad odio.
                    Aspernatur obcaecati vero labore tempore ex dolorum consectetur quia iste sequi! Debitis accusantium provident, dicta quos repudiandae perspiciatis dolorem, alias fugit error modi non. Eum consequuntur eveniet doloribus pariatur adipisci.
                    Exercitationem cum iusto maxime totam officia? Et iure dignissimos in eveniet! Obcaecati totam recusandae, officia itaque sequi laboriosam ratione? Aut ipsum temporibus, expedita sapiente odio nihil eius similique neque. Reprehenderit?
                    </p></div>
                </section>
            
                <section className="img_left_columns">
                
                    <div className="column_text left">
                        <h3>Case - Lorem ipsum</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem, dolore odio aperiam expedita tempore ab rem quo! Animi ratione optio sit ea dolorum explicabo et eius itaque ad odio.
                    Aspernatur obcaecati vero labore tempore ex dolorum consectetur quia iste sequi! Debitis accusantium provident, dicta quos repudiandae perspiciatis dolorem, alias fugit error modi non. Eum consequuntur eveniet doloribus pariatur adipisci.
                    Exercitationem cum iusto maxime totam officia? Et iure dignissimos in eveniet! Obcaecati totam recusandae, officia itaque sequi laboriosam ratione? Aut ipsum temporibus, expedita sapiente odio nihil eius similique neque. Reprehenderit?
                    </p></div>
                    <div className="column left">
                    <img src={require("../images/img-montage.jpg")} alt="" />
                    </div>
                </section>

                <section className="img_right_columns first">
                <div className="column right">
                    <img src={require("../images/img-montage.jpg")} alt="" />
                    </div>
                    <div className="column_text right">
                        <h3>Case - Lorem ipsum</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem, dolore odio aperiam expedita tempore ab rem quo! Animi ratione optio sit ea dolorum explicabo et eius itaque ad odio.
                    Aspernatur obcaecati vero labore tempore ex dolorum consectetur quia iste sequi! Debitis accusantium provident, dicta quos repudiandae perspiciatis dolorem, alias fugit error modi non. Eum consequuntur eveniet doloribus pariatur adipisci.
                    Exercitationem cum iusto maxime totam officia? Et iure dignissimos in eveniet! Obcaecati totam recusandae, officia itaque sequi laboriosam ratione? Aut ipsum temporibus, expedita sapiente odio nihil eius similique neque. Reprehenderit?
                    </p></div>
                </section>
                <section className="img_left_columns first">
               
                    <div className="column_text left">
                        <h3>Case - Lorem ipsum</h3>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem exercitationem, dolore odio aperiam expedita tempore ab rem quo! Animi ratione optio sit ea dolorum explicabo et eius itaque ad odio.
                    Aspernatur obcaecati vero labore tempore ex dolorum consectetur quia iste sequi! Debitis accusantium provident, dicta quos repudiandae perspiciatis dolorem, alias fugit error modi non. Eum consequuntur eveniet doloribus pariatur adipisci.
                    Exercitationem cum iusto maxime totam officia? Et iure dignissimos in eveniet! Obcaecati totam recusandae, officia itaque sequi laboriosam ratione? Aut ipsum temporibus, expedita sapiente odio nihil eius similique neque. Reprehenderit?
                    </p></div>
                     <div className="column left">
                    <img src={require("../images/img-montage.jpg")} alt="" />
                    </div>
                </section>
                </div>
            </div>
    );
}

export default Projekter;