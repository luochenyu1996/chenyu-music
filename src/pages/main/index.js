import React,{memo,Suspense} from "react";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

import HYAppHeader from '@/components/app-header';

export  default  memo(

    function  HYMain(){
        return(
            <HashRouter>
                <HYAppHeader />
                <div>
                    测试
                </div>

            </HashRouter>
        )
    }

)
