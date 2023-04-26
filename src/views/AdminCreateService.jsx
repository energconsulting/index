import { useEffect, useRef, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import TButton from "../components/core/TButton";
import PageComponent from "../components/PageComponent";
import axiosClient from "../axios";
import { useParams, useNavigate } from "react-router-dom";

export default function AdminCreateService() {

    const [name, setName] = useState("");
    const [length, setLength] = useState(0);
    const [price, setPrice] = useState(0);

    const navigate = useNavigate();
    const { showToast } = useStateContext();

    const onSubmit = (evt) => {
        evt.preventDefault();

        const payload = {
            name,
            length,
            price
        };

        axiosClient.post("/service", payload)
            .then((res) => {
                navigate("/admin/services");
                showToast("Szolgáltatás sikeresen hozzáadva");
            }
            );

    }

    return (
        <PageComponent title="Szolgáltatás hozzáadása">
            <form action="#" method="post" onSubmit={onSubmit} className="px-4 py-4">
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="px-4 py-4 bg-white space-y-6 sm:p-6">

                        {/*Név*/}
                        <div className="col-span-6 sm:col-span-3 space-y-3">
                            <label
                                htmlFor="title"
                                className="block text-sm font-bold text-gray-700"
                            >
                                Név
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                onChange={(evt) => setName(evt.target.value)}
                            />
                        </div>
                        {/*Név*/}

                        {/*Hossz*/}
                        <div className="col-span-6 sm:col-span-3 space-y-3">
                            <label
                                htmlFor="title"
                                className="block text-sm font-bold text-gray-700"
                            >
                                Hossz (perc)
                            </label>
                            <input
                                type="number"
                                min={1}
                                step={1}
                                name="length"
                                id="length"
                                className="mt-3 w-36 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                onChange={(evt) => setLength(evt.target.value)}
                            />
                        </div>
                        {/*Hossz*/}

                        {/*Ár*/}
                        <div className="space-y-3">
                            <label
                                htmlFor="title"
                                className="block text-sm font-bold text-gray-700"
                            >
                                Ár (Ft)
                            </label>
                            <input
                                type="number"
                                min={0}
                                step={1}
                                name="price"
                                id="price"
                                className="mt-3 w-36 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                onChange={(evt) => setPrice(evt.target.value)}
                            />
                        </div>
                        {/*Ár*/}

                        <div className="py-3">
                            <TButton color="green">Mentés</TButton>
                        </div>

                    </div>
                </div>
            </form>
        </PageComponent>
    )
}
