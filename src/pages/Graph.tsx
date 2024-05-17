import WaybillsData from "../utils/waybill.data.json"
import WaybillsReturned from "../utils/waybills.returned.json"
import WaybillOutForDelivery from "../utils/way.out.delivery.json"
import WaybillDelivered from "../utils/waybill.delivered.json"

import { AreaChart, Area, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from "recharts"

export const Graph = () => {
    return <div className="w-full h-[auto] md:h-[calc(100vh_-_100px)] p-[20px] md:p-[40px]">

        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-[50px] md:gap-[20px]">
            <div className="bg-white shadow p-[20px] rounded-[10px] h-[200px] md:h-[300px]">
                <span className="text-[12px] md:text-[16px]">Total waybill generated withing a month</span>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={350} height={350} data={WaybillsData}>


                        <CartesianGrid strokeDasharray="5 5" />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" stroke="#f39c3f" fill="#f39c3f" dataKey="waybillsGenerated" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white shadow p-[20px] rounded-[10px] h-[200px] md:h-[300px]">
                <span className="text-[12px] md:text-[16px]">Total waybill out for delivery</span>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={350} height={350} data={WaybillOutForDelivery}>


                        <CartesianGrid strokeDasharray="5 5" />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" stroke="#f39c3f" fill="#f39c3f" dataKey="waybillsOutForDelivery" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white shadow p-[20px] rounded-[10px] h-[200px] md:h-[300px]">
                <span className="text-[12px] md:text-[16px]">Total waybill out for delivery</span>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={350} height={350} data={WaybillDelivered}>


                        <CartesianGrid strokeDasharray="5 5" />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" stroke="#f39c3f" fill="#f39c3f" dataKey="waybillsDelivered" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>

            <div className="bg-white shadow p-[20px] rounded-[10px] h-[200px] md:h-[300px]">
                <span className="text-[12px] md:text-[16px]">Total waybill returned or cancelled</span>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart width={350} height={350} data={WaybillsReturned}>


                        <CartesianGrid strokeDasharray="5 5" />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" stroke="#f39c3f" fill="#f39c3f" dataKey="waybillsReturnedOrCanceled" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    </div>
}