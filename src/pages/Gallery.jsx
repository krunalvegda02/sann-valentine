import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaHeart, FaCalendarAlt, FaMapMarkerAlt, FaCamera, FaRoute, FaEnvelope, FaMapPin, FaCoffee, FaTree, FaFilm, FaStar } from 'react-icons/fa'
import FloatingHearts from '../components/FloatingHearts'

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('memories')

  // Our Journey Timeline with Photos
  const timeline = [
    {
      date: 'January 29, 2023',
      title: 'The Day We Met',
      description: 'The moment I saw you, I knew my life was about to change forever',
      IconComponent: FaStar,
      photo: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600'
    },
    {
      date: 'February 2023',
      title: 'Our First Date',
      description: 'Nervous butterflies, endless conversations, and the beginning of us',
      IconComponent: FaHeart,
      photo: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600'
    },
    {
      date: 'March 2023',
      title: 'Our First Kiss',
      description: 'Time stopped, and I knew I wanted to kiss you forever',
      IconComponent: FaHeart,
      photo: 'https://images.unsplash.com/photo-1522673607167-5d90b8f98537?w=600'
    },
    {
      date: 'Special Moment',
      title: 'When I Knew',
      description: 'The moment I realized you were the one I want to spend my life with',
      IconComponent: FaHeart,
      photo: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600'
    }
  ]

  // Love Notes with images
  const loveNotes = [
    {
      id: 1,
      note: 'Your smile lights up my entire world',
      author: 'Every time I see you',
      image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400'
    },
    {
      id: 2,
      note: 'I fall in love with you more every single day',
      author: 'My heart to yours',
      image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400'
    },
    {
      id: 3,
      note: 'You make my heart skip a beat',
      author: 'Always and forever',
      image: 'https://images.unsplash.com/photo-1522673607167-5d90b8f98537?w=400'
    },
    {
      id: 4,
      note: 'Home is wherever Im with you',
      author: 'My safe place',
      image: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=400'
    },
    {
      id: 5,
      note: 'You are my today and all of my tomorrows',
      author: 'Forever yours',
      image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400'
    },
    {
      id: 6,
      note: 'Thank you for being my reason to smile',
      author: 'With all my love',
      image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400'
    }
  ]

  // Special Places with images
  const specialPlaces = [
    {
      id: 1,
      place: 'Our Favorite Café',
      memory: 'Where we have our coffee dates and deep conversations',
      IconComponent: FaCoffee,
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600'
    },
    {
      id: 2,
      place: 'The Park',
      memory: 'Our sunset walks and stolen kisses',
      IconComponent: FaTree,
      image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?w=600'
    },
    {
      id: 3,
      place: 'Movie Theater',
      memory: 'Holding hands in the dark, sharing popcorn',
      IconComponent: FaFilm,
      image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600'
    },
    {
      id: 4,
      place: 'Our Spot',
      memory: 'Where we go to escape the world and just be us',
      IconComponent: FaStar,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600'
    }
  ]

  // Photo memories
  const photos = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800',
      caption: 'Our first date',
      date: 'Forever in my heart'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800',
      caption: 'When you smiled at me',
      date: 'That moment I fell harder'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1522673607167-5d90b8f98537?w=800',
      caption: 'Making memories together',
      date: 'Every moment with you'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=800',
      caption: 'You and me against the world',
      date: 'Always and forever'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800',
      caption: 'The day I knew',
      date: 'You were the one'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800',
      caption: 'Adventure with you',
      date: 'My favorite person'
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
            { id: 'notes', label: 'Love Notes', IconComponent: FaEnvelope },
            { id: 'places', label: 'Special Places', IconComponent: FaMapPin }
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-full font-cute text-lg font-semibold transition-all ${
                activeTab === tab.id
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
                    className={`relative flex items-center gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {loveNotes.map((note, index) => (
                <motion.div
                  key={note.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-3xl shadow-xl bg-white">
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={note.image}
                        alt={note.note}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-valentine-dark-pink/90 via-valentine-dark-pink/50 to-transparent" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-xl font-script mb-2 leading-relaxed">
                        "{note.note}"
                      </p>
                      <p className="text-sm font-cute italic opacity-90">
                        - {note.author}
                      </p>
                    </div>
                    <motion.div
                      className="absolute top-4 right-4"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaHeart className="text-white drop-shadow-lg" size={24} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
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
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
