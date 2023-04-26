import { useEffect, useRef, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import TButton from "../components/core/TButton";
import PageComponent from "../components/PageComponent";
import axiosClient from "../axios";
import { useParams, useNavigate } from "react-router-dom";

export default function AdminCreateEmployee() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    const { showToast } = useStateContext();

    const onSubmit = (evt) => {
        evt.preventDefault();

        const payload = {
            name,
            email,
            role: "user"
        };

        axiosClient.post("/employee", payload)
            .then((res) => {
                navigate("/admin/employees");
                showToast("Dolgozó sikeresen hozzáadva");
            }
            );

    }

    return (
        <PageComponent title="Dolgozó hozzáadása">
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

                        {/*Név*/}
                        <div className="col-span-6 sm:col-span-3 space-y-3">
                            <label
                                htmlFor="title"
                                className="block text-sm font-bold text-gray-700"
                            >
                                E-mail cím
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="mt-3 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                onChange={(evt) => setEmail(evt.target.value)}
                            />
                        </div>
                        {/*Név*/}
                        <div className="py-3">
                            <TButton color="green">Mentés</TButton>
                        </div>

                    </div>
                </div>
            </form>
        </PageComponent>
    )
}
