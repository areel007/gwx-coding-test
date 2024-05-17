import WaybillGenerated from "../utils/waybill.data.json"

export const Generated = () => {
    return <div className="w-full p-[20px] md:p-[40px] grid grid-cols-1 md:grid-cols-2 items-start gap-[20px]">
        <div className="">
            <div className="shadow p-[20px] bg-white">
                <h3 className="text-[14px] md:text-[16px] text-primary mb-[10px] md:mb-[20px]">Waybill generated for the month of May</h3>
                <div>
                    <div className="grid grid-cols-[1fr_1fr] md:grid-cols-[100px_100px_1fr] gap-[20px] bg-zinc-200 p-[10px] text-[12px] md:text-[14px] font-[300] uppercase">
                        <div className="hidden md:block">S/n</div>
                        <div>Date</div>
                        <div>Waybill</div>
                    </div>

                    <div className="">
                        {WaybillGenerated.map((waybillGenerated, idx) => {
                            return <div key={idx} className="grid grid-cols-[1fr_1fr] md:grid-cols-[100px_100px_1fr] gap-[20px] p-[10px] text-[12px] md:text-[14px] font-[300] uppercase">
                                <div className="hidden md:block">{idx + 1}</div>
                                <div>{waybillGenerated.date}/2024</div>
                                <div>{waybillGenerated.waybillsGenerated}</div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div >

    </div >
}