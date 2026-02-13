import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaCalendarAlt, FaMapMarkerAlt, FaCamera, FaRoute, FaEnvelope, FaMapPin, FaCoffee, FaTree, FaFilm, FaStar } from 'react-icons/fa'
import FloatingHearts from '../components/FloatingHearts'
import img1 from '../assets/1.jpeg'
import img2 from '../assets/2.jpeg'
import img3 from '../assets/3.jpeg'
import img4 from '../assets/4.jpeg'
import img5 from '../assets/5.jpeg'
import img6 from '../assets/6.jpeg'
import img7 from '../assets/7.jpeg'
import img8 from '../assets/8.jpeg'
import img9 from '../assets/9.jpeg'
import img10 from '../assets/10.jpeg'
import img11 from '../assets/11.jpeg'
import img12 from '../assets/12.jpeg'
import img13 from '../assets/13.jpeg'
import img14Real from '../assets/14.jpeg'
import img15Real from '../assets/15.jpeg'
import img17Real from '../assets/17.jpeg'
import img18Real from '../assets/18.jpeg'
import img19Real from '../assets/19.jpeg'
import whatsapp1Real from '../assets/WhatsApp Image 2026-02-13 at 00.14.22.jpeg'
import whatsapp2Real from '../assets/WhatsApp Image 2026-02-13 at 00.14.23.jpeg'

import img14 from '../assets/7.jpeg'
import img15 from '../assets/19.jpeg'
import img17 from '../assets/10.jpeg'
import img18 from '../assets/6.jpeg'
import img19 from '../assets/8.jpeg'
import whatsapp1 from '../assets/12.jpeg'
import whatsapp2 from '../assets/18.jpeg'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('memories')

  // Our Journey Timeline with Photos
  const timeline = [
    {
      date: 'January 29, 2023',
      title: 'The Day We Met',
      description: 'The moment I saw you, I knew my life was about to change forever',
      IconComponent: FaStar,
      photo: img13
    },
    {
      date: 'January 29, 2023',
      title: 'Our First Kiss',
      description: 'Time stopped, and I knew I wanted to kiss you forever',
      IconComponent: FaHeart,
      photo: img15
    },

    {
      date: 'Special Moment',
      title: 'When I Knew',
      description: 'The moment I realized you were the one I want to spend my life with',
      IconComponent: FaHeart,
      photo: img17
    },
    {
      date: 'February 2023',
      title: 'Our Double Date',
      description: 'Nervous butterflies, endless conversations, and the beginning of us like our marriage life', 
      IconComponent: FaHeart,
      photo: img14
    },

  ]



  // Special Places with images
  const specialPlaces = [
    {
      id: 1,
      place: 'Our Favorite Hotel',
      memory: 'Where we have our first fingering first nude and total new experience deep conversations',
      IconComponent: FaCoffee,
      image: img18
    },
    {
      id: 2,
      place: 'Our Secret Cafe',
      memory: 'Our double date ke jema te mane total new experience alyo, jyare me chop stick pakadi and bas maja kari no words',
      IconComponent: FaTree,
      image: img19
    },
    {
      id: 3,
      place: 'Our Tasty COCO',
      memory: 'Holding hands in, sharing coco and icecreame, sitting in public and lots of talk and farvanu',
      IconComponent: FaFilm,
      image: whatsapp1
    },
    {
      id: 4,
      place: 'Our First Date',
      memory: 'Where we go to for the first time and kiss in the public, wk bija ma khovai gaya kasuj sochya vagar aju baju nu and just be us',
      IconComponent: FaStar,
      image: whatsapp2
    }
  ]

  // Photo memories
  const photos = [
    {
      id: 1,
      url: img1,
      caption: 'You make my heart skip a beat',
      date: 'Every single time I see you'
    },
    {
      id: 2,
      url: img2,
      caption: 'In your eyes, I found my home',
      date: 'Where I belong forever'
    },
    {
      id: 3,
      url: img3,
      caption: 'Your smile is my favorite view',
      date: 'Brighter than any sunrise'
    },
    {
      id: 4,
      url: img4,
      caption: 'With you, every moment is magic',
      date: 'My forever and always'
    },
    {
      id: 5,
      url: img5,
      caption: 'You are my greatest adventure',
      date: 'And my safest place'
    },
    {
      id: 6,
      url: whatsapp2,
      caption: 'Falling for you was easy',
      date: 'Staying in love is my choice'
    },
    {
      id: 7,
      url: img7,
      caption: 'Your laugh is my favorite sound',
      date: 'Music to my soul'
    },
    // {
    //   id: 8,
    //   url: img8,
    //   caption: 'Together we are unstoppable',
    //   date: 'You and me against the world'
    // },
    {
      id: 9,
      url: img9,
      caption: 'Every love story is beautiful',
      date: 'But ours is my favorite'
    },
    {
      id: 10,
      url: img10,
      caption: 'You are my today and tomorrow',
      date: 'My forever love'
    },
    {
      id: 11,
      url: img11,
      caption: 'In your arms, I found peace',
      date: 'My heart found home'
    },
    {
      id: 12,
      url: img12,
      caption: 'You are my sunshine on cloudy days',
      date: 'My light in the darkness'
    },
    {
      id: 14,
      url: img14Real,
      caption: 'Loving you is the best decision',
      date: 'I make every single day'
    },
    {
      id: 15,
      url: img15Real,
      caption: 'You are my dream come true',
      date: 'My answered prayer'
    },
    {
      id: 17,
      url: img17Real,
      caption: 'With you, I am complete',
      date: 'My missing piece found'
    },
    {
      id: 18,
      url: img18Real,
      caption: 'Your love is my greatest treasure',
      date: 'Worth more than anything'
    },
    {
      id: 19,
      url: img19Real,
      caption: 'You make ordinary moments extraordinary',
      date: 'Just by being you'
    },
    {
      id: 20,
      url: whatsapp1Real,
      caption: 'Forever grateful for you',
      date: 'My blessing, my love'
    },
    {
      id: 21,
      url: whatsapp2Real,
      caption: 'You are my always and forever',
      date: 'My one and only'
    }
  ]

  return (
    <div className="relative min-h-screen py-12 px-4">
      <FloatingHearts />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-6"
          >
            <FaHeart className="text-valentine-dark-pink mx-auto" size={70} />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-cursive text-gradient mb-4">
            Our Love Story
          </h1>

          <p className="text-xl md:text-2xl text-valentine-dark-purple font-cute">
            Every moment with you is a treasure
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'memories', label: 'Memories', IconComponent: FaCamera },
            { id: 'timeline', label: 'Our Journey', IconComponent: FaRoute },
            { id: 'notes', label: 'For You', IconComponent: FaEnvelope },
            { id: 'places', label: 'Special Places', IconComponent: FaMapPin }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-full font-cute text-lg font-semibold transition-all ${activeTab === tab.id
                ? 'bg-gradient-to-r from-valentine-pink to-valentine-purple text-white shadow-xl scale-105'
                : 'bg-white/60 text-valentine-dark-purple hover:bg-white/80'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.IconComponent className="inline mr-2" size={18} />
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Memories Tab */}
        {activeTab === 'memories' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-lg max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-valentine-dark-purple font-cute text-center leading-relaxed">
                "These photos capture just a few of our countless beautiful moments.
                Each one holds a memory that makes my heart smile.
                You are my favorite chapter in the story of my life."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-2xl shadow-xl bg-white p-3">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src={photo.url}
                        alt={photo.caption}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-valentine-dark-pink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                        <FaHeart className="text-white animate-heart-beat" size={40} />
                      </div>
                    </div>
                    <div className="mt-3 text-center">
                      <p className="text-valentine-dark-purple font-cute font-semibold text-lg mb-1">
                        {photo.caption}
                      </p>
                      <p className="text-valentine-dark-pink font-cute text-sm italic">
                        {photo.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Timeline Tab */}
        {activeTab === 'timeline' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-valentine-pink via-valentine-purple to-valentine-pink hidden md:block" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      } flex-col`}
                  >
                    <div className="flex-1 md:w-5/12">
                      <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <FaCalendarAlt className="text-valentine-dark-pink" size={20} />
                          <span className="text-valentine-dark-pink font-cute font-semibold text-lg">
                            {item.date}
                          </span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-script text-valentine-dark-purple mb-3">
                          {item.title}
                        </h3>
                        <p className="text-lg text-valentine-dark-purple font-cute">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10 flex-shrink-0">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-br from-valentine-pink to-valentine-purple rounded-full flex items-center justify-center shadow-xl"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.IconComponent className="text-white" size={28} />
                      </motion.div>
                    </div>

                    <div className="flex-1 md:w-5/12">
                      <motion.div
                        className="relative overflow-hidden rounded-3xl shadow-xl"
                        whileHover={{ scale: 1.05 }}
                      >
                        <img
                          src={item.photo}
                          alt={item.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-valentine-dark-pink/50 to-transparent" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Love Notes Tab */}
        {activeTab === 'notes' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="max-w-4xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-valentine-light-pink to-valentine-light-purple rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                <div className="flex items-center justify-center mb-6">
                  <FaHeart className="text-valentine-dark-pink" size={40} />
                </div>
                <div className="prose prose-lg max-w-none">
                  <p className="text-base md:text-lg text-valentine-dark-purple font-cute leading-relaxed whitespace-pre-line">
                    Hello baby, I know apde bau jagadya kale, but hu tane bau prem karu chu, mane tara sivay koina ma interest nai, tara jetlu hu koinathi attract nai thato snehu.
                    {"\n\n"}
                    Apde life no 10% time ek bija sathe kadhi didho che, have mare mara vadhela badha j divas tara sathe kadhva che snehu, taru dhyan rakhvu che tane fuck karvi che, tane farva lai javi che.
                    {"\n\n"}
                    Tane bau bau bau prem karvo che snehu. Hamesha taro hath pakadvo che snehu.
                    {"\n\n"}
                    Maja aai kale tara thi jagadine, but jagadata jagadata mara man ma prem j hato km ke tara mate aa present ready karato hato hu snehu, and jagadine tane heran.
                    {"\n\n"}
                    Sachey baby, I love you, mari cuttie valentine, have tame mane accept karij lidho che to farmais ko tamari shu joie che tamne snehu maam tamaru ek physical present pan wait kare che mango baby snehu.
                    {"\n\n"}
                    Mara jode akhi life rehvanu che tare snehu baby akhi life snehu, 1week this plan karu chu baby tamara mate aa vistuall present. And hope tame aa joine bau khush thaso, maro badho gusso gayab kari deso please, pretty please.
                    {"\n\n"}
                    Em nathi snehu ke aa gift me tane shant karva banayu, aa maru plan hatu ke tane valentine par aalu but baby apda past few days bau kharab gaya snehu mara karane, im sorry snehu, tamari food treeat, tamaru actual meal and teddy badhu tamara jode che, chupchap whatapp ma jao and bolo shu kehvu che have, shu tamaro boyfrined haju tamne prem nai karto hein baby?????
                  </p>
                </div>
                <div className="mt-8 text-center">
                  <p className="text-lg text-valentine-dark-pink font-script italic">
                    - With all my heart, forever yours
                  </p>
                </div>
                <motion.div
                  className="flex justify-center mt-6"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaHeart className="text-valentine-dark-pink" size={30} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* Special Places Tab */}
        {activeTab === 'places' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {specialPlaces.map((place, index) => (
                <motion.div
                  key={place.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ scale: 1.03 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={place.image}
                        alt={place.place}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <place.IconComponent className="text-white" size={50} />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center gap-2 mb-2">
                        <FaMapMarkerAlt className="text-valentine-light-pink" size={20} />
                        <h3 className="text-2xl md:text-3xl font-script text-white">
                          {place.place}
                        </h3>
                      </div>
                      <p className="text-lg text-white/90 font-cute">
                        {place.memory}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Bottom Message */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-valentine-pink to-valentine-purple rounded-3xl p-10 max-w-2xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaHeart className="text-white" size={32} />
              <p className="text-3xl md:text-4xl font-cursive text-white">
                I Love You!
              </p>
              <FaHeart className="text-white" size={32} />
            </div>
            <p className="text-xl md:text-2xl text-white font-cute">
              Thank you for being my Valentine and making every day special
            </p>
          </div>

          <motion.div
            className="mt-8 flex justify-center gap-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <FaHeart className="text-valentine-dark-pink" size={40} />
            <FaHeart className="text-valentine-dark-purple" size={50} />
            <FaHeart className="text-valentine-dark-pink" size={40} />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Gallery
