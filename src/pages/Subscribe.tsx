import { useState, FormEvent } from "react";
import logo from "../assets/logo.png";
import code from "../assets/code-mockup.png";
import { useCreateSubscriberMutation } from "../graphql/generated";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Subscribe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  function submitEmail() {
    if (email !== "" && name != "") {
      emailjs
        .send(
          import.meta.env.VITE_API_EMAIL_SEVICE_ID,
          import.meta.env.VITE_API_EMAIL_TEMPLATE_ID,
          { name, email },
          import.meta.env.VITE_API_EMAIL_PUBLIC_KEY
        )
        .then(() => {
          toast.success(
            "Cadastro realizado com sucesso! Abra seu email e acesse o link que foi enviado"
          );
        })
        .catch(() => {
          toast.error("Erro ao realizar cadastro, tente novamente!");
        });
      setName("");
      setEmail("");
    }
    else{
        toast.error("Preencha todos os dados!");
    }
  }

  async function handleSubscribe(event: FormEvent) {
    submitEmail();
    event.preventDefault();
    await createSubscriber({
      variables: {
        name,
        email,
      },
    });
  }

  return (
    <>
      <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col">
      <ToastContainer position="bottom-left" autoClose={5000} />
        <div className="w-full max-w-[1100px] text-center mt-20 mx-auto sm:flex sm:justify-between sm:text-left">
          <div className="max-w-[640px]">
            <img src={logo} alt="" className="mx-auto sm:mx-0" />

            <h1 className="mt-8 text-[30px] leading-tight sm:text-[2.5rem]">
              Esta aplicação foi completamente feita em{" "}
              <strong className="text-blue-500">React</strong>, com o intuito de
              disponibilizar diversas aulas de{" "}
              <strong className="text-blue-500">programação</strong>
            </h1>
            <p className="px-4 mt-4 text-gray-200 sm:px-0">
              As aulas foram coletas do youtube, do canal curso em video, seram
              disponibilizados 2 modulos do curso de JavaScript lecionados pelo
              professor Gustavo Guanabara
            </p>
          </div>

          <div className="p-8 mt-8 bg-gray-700 border border-gray-500 rounded sm:mt-0">
            <strong className="text-2xl mb-6 block">
              Inscreva-se gratuitamente
            </strong>

            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-2 w-full"
            >
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                className="bg-gray-900 rounded px-5 h-14"
                type="email"
                value={email}
                placeholder="Digite seu email"
                onChange={(event) => setEmail(event.target.value)}
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                Garantir minha vaga
              </button>
            </form>
          </div>
        </div>
        <div className="mt-10 mx-auto">
          <img src={code} alt="" />
        </div>
      </div>
    </>
  );
}
