import { useEffect, useState } from "react"
import {  Heart, Sparkles } from 'lucide-react';
import Button from "./components/Button";
import Carousel from "./components/Carousel";
import { useReward } from 'react-rewards';
import { motion } from 'motion/react';

const bgSound = new Audio("./sounds/tranqui, te puedes enamorar.mp3")

const WSPP_LINK = "https://wa.me/51969311215"

const NOT_BUTTON_PHRASES = [
  "No",
  "¿Estás segura? 🥺",
  "Piensa en ello 🙏",
  "Piénsalo otra vez por favor 🙏",
  "Me romperás el corazón 😭",
  "😞😞😞",
  "Anda, no seas malita 🙏",
  "Di que sí 😊",
  "😨😨😨",
  "Por favor 🥺",
  "No me hagas llorar 😭",
  "No me hagas esto 😞😞",
]

function App() {
  const [currentView, setCurrentView] = useState("letter") // letter, finalMessage
  const [buttonNotStyle,setbuttonNotStyle]=useState({});
  const [buttonYesStyle,setbuttonYesStyle]=useState({});
  const [countButtonNot, setCountButtonNot] = useState(0)
  /* effects and animations */
  const { reward } = useReward('rewardId', 'confetti', {
    lifetime: 1000,
    // angle: 180,
    spread: 100,
    elementCount: 400,
    elementSize: 10,
    zIndex: 1,
  });

  useEffect(() => {
    const playAudio = () => {
      bgSound.loop = true;
      bgSound.play();
      document.removeEventListener('mousedown', playAudio);
    };

    document.addEventListener('mousedown', playAudio);

    return () => {
      document.removeEventListener('mousedown', playAudio);
    };
  }, []);

  const changeView = (view) => {
    setCurrentView(view)
    reward()
  }

  const modifyButtonStyle = () => {

    if (countButtonNot >= NOT_BUTTON_PHRASES.length-1) {
      
      return setbuttonNotStyle({
        display:"none",
      })
    }else{
      setCountButtonNot(countButtonNot + 1)
      setbuttonYesStyle({
        scale: (1 + ((countButtonNot+1) * 0.1)),
      })
    }
    

    let leftStyle=`${Math.floor(Math.random() * (40)) + 1}%`
    let buttomtStyle=`${Math.floor(Math.random() * (80-7 + 1)) + 7}%`

    setbuttonNotStyle({
        position:"absolute",
        left:leftStyle,
        bottom:buttomtStyle
    })
  }

  return (
    <>
      <div className="w-full h-dvh flex justify-center items-center bg-red-100 p-6 flex-col overflow-hidden">
        {currentView === "letter" && (
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }} 
            className="w-full max-w-[400px] md:max-w-[450px] lg:max-w-[500px] min-h-[430px]  bg-white flex flex-col justify-start items-center px-4 py-10 relative gap-8 rounded-lg shadow-lg">
            {/* Icons */}
            <Sparkles className="w-6 h-6 text-yellow-400 absolute top-2 right-2 rotate-icon" />
            <Sparkles className="w-6 h-6 text-yellow-400 absolute bottom-2 left-2 rotate-icon" />
            {/* Content */}
            <Heart className="w-20 h-20 text-red-500 heartbeat-icon" />
            <h3 className="w-[90%] text-2xl lg:text-3xl font-bold text-pink-600 text-center">Bianca Gonzalez, ¿Quieres ser mi San Valentín? 💝</h3>

            <div className="flex flex-col gap-4  items-center">
              <Button onClick={() => changeView("finalMessage")} type="primary"
              style={buttonYesStyle}>¡Sí! 💗</Button>
              <Button onClick={() => modifyButtonStyle() } type="secondary" style={buttonNotStyle}>{NOT_BUTTON_PHRASES[countButtonNot]}</Button>
            </div>
          </motion.div>
          )}
        
        {currentView === "finalMessage" && (
          <div className="w-full max-w-[400px] sm:max-w-[450px] md:max-w-[550px] flex flex-col justify-center items-center gap-8">
            <motion.h3
            initial={{ y: -600, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2 }}  className="text-xl md:text-2xl font-bold text-pink-600 text-center">¡Gracias por aceptar pasar este San Valentín conmigo!
            Tú unica tarea es ponerte bonita (como siempre) porque de todo lo demás me encargo yo, porque mi felicidad se mide en sonrisas tuyas.
            ¡Te quiero, Mashi!🫶🏽
            🥳</motion.h3>

            <motion.div
              initial={{  opacity: 0 }}
              animate={{  opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <Carousel />
            </motion.div>
            
            <a className="font-semibold underline text-center md:text-lg" href={WSPP_LINK} target="_blank">Finaliza esta invitación haciendo click aquí!</a>
          </div>
          )}

        <span id="rewardId" />
      </div>
    </>
  )
}

export default App
