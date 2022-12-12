import { useEffect, useState } from 'react';
import {onFCP,onLCP, onTTFB, onFID, onCLS} from 'web-vitals';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const useWebVitals = () => {

    const [metrics, setMetrics] = useState([])

    function addToQueue(newMetric) {
        setMetrics( (old) => [...old, {name:newMetric.name, value: newMetric.value, rating: newMetric.rating}]);
    }

    function getMetrics() {

        const metricHtml = `
            <div>
                ${metrics.map(metric => `<span>${metric.name} - ${metric.value} - classificação: ${metric.rating} </span> <br/>`).join(` `)}
            <div>
        `

        MySwal.fire({
            title: <p>Web Vitals</p>,
            text: `${JSON.stringify(metrics, null, 2)}`,
            html: metricHtml
        })
    }
    
    useEffect(() => {
        onFCP(addToQueue);
        onLCP(addToQueue);
        onTTFB(addToQueue);
        onFID(addToQueue);
        onCLS(addToQueue);

        return () => {
            setMetrics([])
        }
    },[])


    return {metrics, getMetrics}
}



