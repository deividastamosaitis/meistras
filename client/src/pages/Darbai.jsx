import React from "react";
import { toast } from "react-toastify";
import { DarbaiForma, DarbaiContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import Wrapper from "../assets/wrappers/Darbai";

export const loader = async () => {
  try {
    const { data } = await customFetch.get("/darbai");

    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllDarbaiContext = createContext();

const Darbai = () => {
  const { data } = useLoaderData();

  return (
    <AllDarbaiContext.Provider value={{ data }}>
      <Wrapper>
        <DarbaiForma />
        <DarbaiContainer />
      </Wrapper>
    </AllDarbaiContext.Provider>
  );
};

export const useAllDarbaiContext = () => useContext(AllDarbaiContext);
export default Darbai;
