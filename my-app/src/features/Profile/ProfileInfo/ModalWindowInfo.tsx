import styled from "styled-components";
import React, {useState} from "react";
import {ProfileType} from "../../../store/stateType";

let ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  border-radius: 2rem;
  background-color: rgba(0, 0, 0, 0.1);

`;
let ModalWindowBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  min-height: 500px;
  background: white;
  border-radius: 10px;
  width: 608px;
  background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.5));
  backdrop-filter: blur(2rem);
  animation: show-modal 0.3s forwards;

  @keyframes show-modal {
    0% {
      opacity: 0;
      transform: translateY(-50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

`;

let InputBlock = styled.div`
  font-size: 1.5rem;
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-content: center;
  margin-top: 15px;

  label {
    display: flex;
    align-content: center;
  }

  input {
    width: 300px;
    padding: 3px 10px;
    font-size: 1.5rem;
    border-radius: 1rem;
    outline: none;
  }

  input[type="checkbox"] {
    width: 25px;
    height: 25px;
    margin-bottom: 15px;
  }

  textarea {
    padding: 3px 10px;
    border-width: 2px;
    font-size: 1.5rem;
    border-radius: 1rem;
    outline: none;
    height: 150px;
    width: 300px;
  }

  span {
    margin-left: 15px;
  }
`;

let ButtonBlock = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;

  button {
    font-size: 25px;
  }

`


type ModalWindowInfoPropsType = {
    showModal: (show: boolean) => void
    profileInfo: ProfileType | null
}


export function ModalWindowInfo(props: ModalWindowInfoPropsType) {

    const getInit = (val: string ): string  => props.profileInfo ? props.profileInfo[val] :  "" ;
    const getInitOpenForJob = (val: string ): boolean  => props.profileInfo ? props.profileInfo[val] :  false;
    const getInitContacts = (val: string ): string  => (props.profileInfo && props.profileInfo.contacts) ? props.profileInfo.contacts[val] :  "";


    let [name, setName] = useState(getInit("fullName") )
    let [github, setGithub] = useState(getInitContacts("github"))
    let [twitter, setTwitter] = useState(getInitContacts("twitter"))
    let [instagram, setInstagram] = useState(getInitContacts("instagram"))
    let [facebook, setFacebook] = useState(getInitContacts("facebook"))
    let [vk, setVk] = useState(getInitContacts("vk"))
    let [aboutMe, setAboutMe] = useState(getInit("aboutMe"))
    let [openForJob, setOpenForJob] = useState<boolean>(getInitOpenForJob("lookingForAJob"))


    return (
        <ModalContainer>
            <ModalWindowBlock>
                <InputBlock>
                    <label> <input type="text" placeholder={"name"} value={name} onChange={(e)=>setName(e.currentTarget.value)}/> <span>- Name</span></label>
                </InputBlock>
                <InputBlock>
                    <label> <input type="text" placeholder={"github"} value={github} onChange={(e)=>setGithub(e.currentTarget.value)}/> <span>- Github</span></label>
                </InputBlock>
                <InputBlock>
                    <label> <input type="text" placeholder={"twitter"} value={twitter} onChange={(e)=>setTwitter(e.currentTarget.value)}/> <span>- Twitter</span></label>
                </InputBlock>
                <InputBlock>
                    <label> <input type="text" placeholder={"instagram"} value={instagram} onChange={(e)=>setInstagram(e.currentTarget.value)}/> <span>- Instagram</span></label>
                </InputBlock>
                <InputBlock>
                    <label> <input type="text" placeholder={"facebook"} value={facebook} onChange={(e)=>setFacebook(e.currentTarget.value)}/> <span>- Facebook</span></label>
                </InputBlock>
                <InputBlock>
                    <label> <input type="text" placeholder={"vk"} value={vk} onChange={(e)=>setVk(e.currentTarget.value)}/> <span>- VK</span></label>
                </InputBlock>
                <InputBlock>
                    <label> <textarea placeholder={"about me"} value={aboutMe} onChange={(e)=>setAboutMe(e.currentTarget.value)}/> <span>- About me </span></label>
                </InputBlock>
                <InputBlock>
                    <label> <input type="checkbox" checked={openForJob} onChange={(e)=>setOpenForJob(e.currentTarget.checked)}/> <span>- Open for interviews</span></label>
                </InputBlock>
                <ButtonBlock>
                    <button onClick={() => props.showModal(false)}>Cancel</button>
                    <button>Apply changes</button>
                </ButtonBlock>
            </ModalWindowBlock>
        </ModalContainer>
    );
}

