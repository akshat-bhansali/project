import Banner4 from "./Banner4";
import Dropdowns from "./Dropdowns";
import {Page} from "../../schema";
import Function1 from "../atoms/Function1";
import Banner1 from "./Banner1";
import Function2 from "../atoms/Function2";
import Rules from "./Rules";
import Functions3 from "./Functions3";
import Banner2 from "./Banner2";
import Banner3 from "./Banner3";
import React from "react";
import Functions1 from "./Functions1";
import Functions2 from "./Functions2";

const mapping:{[key in Page['sections'][number]['_type']]:any}={
    cta_section:Banner4,
    faq_section:Dropdowns,
    feature_section:Functions1,
    hero_section:Banner1,
    navigator_section:Functions2,
    tabs_section:Rules,
    secondary_features_section:Functions3,
    secondary_hero_section:Banner2,
    steps_section:Banner3
}
export default function SectionMapper({sections, lang}:{sections:Page['sections'], lang:string}){
    return <div>
        {sections.map(section=>React.createElement(mapping[section._type], {...section, lang}))}
    </div>

}