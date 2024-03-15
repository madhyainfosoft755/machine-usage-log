import { BsClipboard2Data } from "react-icons/bs";
const DashboardCard = ({ title, value }) => {
    return <>
        <div class="relative flex flex-col min-w-0 mb-6 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
            <div class="flex-auto p-4">
                <div class="flex flex-wrap mx-3 p-4 shadow-xl min-w-md bg-white rounded-md">
                    <div class="flex-none w-2/3 max-w-full px-3">
                        <div>
                            <p class="mb-0 font-sans font-semibold leading-normal text-sm">{title}</p>
                            <h5 class="mb-0 font-bold">
                                {value}
                                {/* <span class="leading-normal text-sm font-weight-bolder text-lime-500">+55%</span> */}
                            </h5>
                        </div>
                    </div>
                    <div class="w-4/12 max-w-full px-3 ml-auto text-right flex-0">
                        <div class="w-12 h-12 text-center rounded-lg bg-gradient-to-tl from-purple-700 to-blue-500 shadow-soft-2xl flex flex-col justify-center items-center">
                            <BsClipboard2Data color="white" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
}

export default DashboardCard;