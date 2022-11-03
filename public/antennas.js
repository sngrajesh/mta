export const antennas = [
  {
    id: 1,
    title: "Log Periodic Antennas",
    slug: "log-periodic-antennas",
    detail: [
      {
        image: "/antenna_images/log-periodic-antenna-Copy-300x197.jpg",
        description:
          "A log-periodic antenna is also named a log-periodic array. It is a multi-element, directional narrow beam antenna that works on a wide range of frequencies. This antenna is made of a series of dipoles placed along the antenna axis at different space intervals of time followed by a logarithmic function of frequency.",
      },
      {
        description:
          "A log-periodic antenna is used in a wide range of applications where variable bandwidth is required along with antenna gain and directivity. The antenna is also used in the field of radio astronomy, satellite communications, and radar. The antenna is also used in the field of radio astronomy, satellite communications, and radar.",
      },
    ],
    advantages: [
      "The antenna design is compact.",
      "Gain and radiation pattern are varied according to the requirements.",
      "It is available in wide variety of shapes.",
    ],
    disadvantages: [
      "External mount.",
      "Installation cost is high.",
      "They are not used for omni-directional applications.",
    ],

    subAntennas: [
      {
        id: 1.1,

        title: "Bow Tie Antennas",
        slug: "bow-tie-antennas",
        detail: [
          {
            image: "/antenna_images/bow-tie-antenna.jpg",
            description:
              "A bow-tie antenna is also known as a Biconical antenna or Butterfly antenna. Biconical antenna is an omnidirectional wide-band antenna. ",
          },
          {
            description:
              "According to the size of this antenna, it has low- frequency response and acts as a high-pass filter. As the frequency goes to higher limits, away from the design frequency, the radiation pattern of the antenna gets distorted and spreads.",
          },
          {
            description:
              "Most of the bow-tie antennas are derivatives of biconical antennas. The discone is a type of half-biconical antenna. The bow-tie antenna is a planar, and therefore, a directional antenna.",
          },
        ],
        advantages: [
          "The bandwidth of the antenna is increased by using triangular elements over straight ones.",
          "lighter in weight than a fan dipole antenna that connects the horizontal elements.",
          "The design is made stronger by the metal bar that closes the bow tie, though that does add to its weight.",
          "Cheap and easy to construct.",
          "The mesh reflector in the bowtie antenna is more efficient than other types of antennas such as yagi antennas.",
        ],
        disadvantages: [
          "Biconical antennas, including bowtie antennas, have poor transmitting efficiencies in the low end of their frequency range. A log periodic antenna is better in that regard.",
          "A bowtie antenna isn’t as well suited as a full biconical antenna in RF sniffing or RF signal detection.",
        ],
      },
      {
        id: 1.2,
        title: "Log-Periodic Dipole Array",
        slug: "log-periodic-dipole-array",
        detail: [
          {
            image: "/antenna_images/log-periodic-dipole-antenna-300x182.jpg",
            description:
              "The most common type of antenna used in wireless communication technology is a log-periodic dipole array that fundamentally comprises a number of dipole elements. ",
          },
          {
            description:
              "These dipole-array antennas reduce in size from the back end to the front end. The leading beam of this RF antenna comes from the smaller front end.",
          },
          {
            description:
              "The element at the back end of the array is large in size with the half-wavelength operating in a low-frequency range. The spacing of the element gets reduced towards the front end of the array wherein the smallest arrays are placed. During this operation, as the frequency varies, a smooth transition takes place along the array of the elements, which leads to forming an active region.",
          },
        ],
        advantages: [
          "Low to moderate gains can be obtained.",
          "It offers uni-directional and bi-directional radiation patterns. It is highly directional antenna.",
          "It can be used for HF/VHF/UHF communication as well as for TV reception.",
        ],
        disadvantages: [
          "Log periodic antenna requires higher number of elements for lower frequencies in HF/VHF bands.",
          "The antenna offers lower gain compare to YAGI antenna having same size.",
          "They are not used for omni-directional applications.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Wire Antennas",
    slug: "wire-antennas",
    detail: [
      {
        image: "/antenna_images/wire-antenna.jpg",
        description:
          "Wire antennas are also known as linear or curved antennas. These antennas are very simple, cheap, and are used in a wide range of applications. These antennas are further subdivided into four as explained below.",
      },
    ],
    advantages: [
      "It is simple in construction.",
      "It offers satisfactory gain and directivity.",
      "It radiates on any frequency for which its overall length is not less than approx. λ/2.",
    ],
    disadvantages: [
      " It requires antenna tuner unit or matching system.",
      "It can be problem for lightning.",
      "Single wire feed line used in long wire antenna is prone to shock hazard.",
    ],

    subAntennas: [
      {
        id: 2.1,
        title: "Dipole Antennas",
        slug: "dipole-antennas",
        detail: [
          {
            image: "/antenna_images/dipole-antenna.jpg",
            description:
              "A dipole antenna is one of the most straightforward antenna alignments. This dipole antenna consists of two thin metal rods with a sinusoidal voltage difference between them. ",
          },
          {
            description:
              "The length of the rods is chosen in such a way that they have a quarter length of the wavelength at operational frequencies. These antennas are used in designing their own antennas or other antennas. They are very simple to construct and use.",
          },
          {
            description:
              "The dipole antenna consists of two metallic rods through which current and frequency flow. This current and voltage flow makes an electromagnetic wave and the radio signals get radiated. The antenna consists of a radiating element that splits the rods and makes current flow through the center by using a feeder at the transmitter out that takes from the receiver. The different types of dipole antennas used as RF antennas include half wave, multiple, folded, non-resonant, and so on.",
          },
        ],
        advantages: [
          "The biggest advantage of a dipole antenna is its simplicity.",
          "Dipole antennas are very efficient when used at their resonant frequency.",
          "Dipole antennas are omnidirectional when sending and receiving signals. ",
        ],
        disadvantages: [
          "For very low frequencies, the wavelength is too long to make a dipole antenna practical unless you use a quarter-wave dipole.",
          "Inverted-V antennas have reduced efficiency compared to standard dipole antennas.",
          "Folded dipoles are slightly more complicated than monopole antennas, though they are not as complicated as yagi or quad patch antennas.",
        ],
      },
      {
        id: 2.2,
        title: "Short-Dipole Antenna",
        slug: "short-dipole-antenna",
        detail: [
          {
            image: "/antenna_images/short-dipole-antenna-300x288.jpg",
            description:
              "It is the simplest of all types of antennas. This antenna is an open-circuited wire in which short denotes “ relative to a wavelength” so this antenna gives priority to the size of the wire relative to the wavelength of the frequency of operation.",
          },
          {
            description:
              "It does take any consideration about the absolute size of the dipole antenna. The short dipole antenna is made up of two co-linear conductors that are placed end to end, with a small gap between conductors by a feeder. A Dipole is considered short if the length of the radiating element is less than a tenth of the wavelength (i.e. : L<λ/10 ).",
          },
          {
            description:
              "The short dipole antenna is made of two co-linear conductors that are placed end to end, with a small gap between conductors by a feeder.The short dipole antenna is infrequently satisfactory from an efficiency viewpoint because most of the power entering this antenna is dissipated as heat and resistive losses also become gradually high.",
          },
        ],
        advantages: [
          "Ease of construction, due to small size",
          "Power dissipation efficiency is higher",
        ],
        disadvantages: [
          "High resistive losses",
          "High power dissipation",
          "Low Signal-to-noise ratio",
          "Radiation is low and not so efficient",
        ],
      },
      {
        id: 2.3,
        title: "Monopole Antenna",
        slug: "monopole-antenna",
        detail: [
          {
            image: "/antenna_images/monopole-antenna-300x234.jpg",
            description:
              "A monopole antenna is half of a simple dipole antenna located over a grounded plane as shown in the figure below.",
          },
          {
            description:
              "The radiation pattern above the grounded plane will be the same as the half-wave dipole antenna, however, the total power radiated is half that of a dipole; the field gets radiated only in the upper hemisphere region. The directivity of these antennas becomes double compared to the dipole antennas.",
          },
          {
            description:
              "The monopole antennas are also used as vehicle-mounted antennas as they provide the required ground plane for the antennas mounted above the earth.",
          },
        ],
        advantages: [
          "A vertical monopole antenna can be used for any frequency shorter than two thirds of the wavelength.",
          "Monopole antennas are easy to build and install. Passive monopoles are cheap to make and rugged.",
          "A monopole antenna has relatively high reactive impedance over most of its frequency range. Put an active amplifier with ah high input impedance, and you can transform the impedance without losing any sensitivity.",
        ],
        disadvantages: [
          "Because you are radiating equally in all directions, you have equally poor radiation in all directions.",
          "Metal objects and the ground itself can cause signal reflections, so you may get a signal that is both horizontally and vertically polarized.",
          "Inside a shielded chamber, monopole antennas can have impedances vary by orders of magnitude, making it difficult to calibrate.",
        ],
      },
      {
        id: 2.4,
        title: "Loop Antenna",
        slug: "loop-antenna",
        detail: [
          {
            image: "/antenna_images/loop-antenna-298x300.jpg",
            description:
              "Loop antennas share similar characteristics with both dipole and monopole antennas because they are simple and easy to construct. Loop antennas are available in different shapes like circular, elliptical, rectangular, etc. ",
          },
          {
            description:
              "The fundamental characteristics of the loop antenna are independent of its shape. They are widely used in communication links with a frequency of around 3 GHz. These antennas can also be used as electromagnetic field probes in microwave bands.",
          },
          {
            description:
              "The circumference of the loop antenna determines the efficiency of the antenna is similar to that of dipole and monopole antennas. These antennas are further classified into two types: electrically small and electrically large based on the circumference of the loop.",
          },
          {
            description:
              "Electrically small loop antenna———>  Circumference≤λ⁄10 ",
          },
          {
            description:
              "  Electrically large loop antenna  ———>    Circumference≈λ",
          },
          {
            description:
              "Electrically small loops of a single turn have small radiation resistance compared to their loss resistance. The radiation resistance of small loop antennas can be improved by adding more turns. Multi-turn loops have better radiation resistance even if they have less efficiency.",
          },
          {
            description:
              "Due to this, the small loop antenna is mostly used as receiving antennas where losses are not mandatory. Small loops are not used as transmitting antennas due to their low efficiency.",
          },
          {
            description:
              "Resonant loop antennas are relatively large and are directed by the operation of wavelength. They are also known as large loop antennas as they are used at higher frequencies, such as VHF and UHF, wherein their size is convenient. They can be viewed as a folded-dipole antenna and deformed into different shapes like spherical, square, etc., and have similar characteristics such as high-radiation efficiency.",
          },
        ],
        advantages: [
          "It is light in weight.",
          "It is simple and compact in structure.",
          "It is economical.",
          "It is suitable for portable applications such as direction finding etc.",
        ],
        disadvantages: [
          "Small loops have poor efficiency and hence are mainly used as receiving antenna at lower frequencies.",
          "Small loop antennas have very low value of radiation resistance. This results into power loss as heat due to flow of current with high levels. Hence large loop antennas are preferred over smaller ones.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Travelling Wave Antennas",
    slug: "travelling-wave-antennas",
    detail: [
      {
        image: "/antenna_images/travelling-wave-antenna.png",
        description:
          "Travelling wave antennas are also known as travelling wave tubes (TWTs). These antennas are used in microwave and millimeter-wave applications. These antennas are used in radar systems, satellite communication systems, and so on. These antennas are further classified into two types as explained below.",
      },
    ],
    advantages: [
      "since they are nonresonant they often have a wider bandwidth than resonant antennas.",
    ],
    disadvantages: ["Provide strog minor lobes", "Efficiency is low"],
    subAntennas: [
      {
        id: 3.1,
        title: "Helical Antennas",
        slug: "helical-antennas",
        detail: [
          {
            image: "/antenna_images/helical-antenna-300x208.jpg",
            description:
              "Helical antennas are also known as helix antennas. They have relatively simple structures with one, two, or more wires each wound to form a helix, usually backed by a ground plane or shaped reflector and driven by an appropriate feed.",
          },
          {
            description:
              "The most common design is a single wire backed by the ground and fed with a coaxial line. In General, the radiation properties of a helical antenna are associated with this specification: the electrical size of the structure, wherein the input impedance is more sensitive to the pitch and wire size.",
          },
          {
            description:
              "Helical antennas have two predominant radiation modes: the normal mode and the axial mode. The axial mode is used in a wide range of applications. In the normal mode, the dimensions of the helix are small compared to its wavelength. This antenna acts as the short dipole or monopole antenna. In the axial mode, the dimensions of the helix are the same compared to its wavelength. This antenna works as a directional antenna.",
          },
        ],
        advantages: [
          "It is simple in design.",
          " As it uses circular polarised pattern, it is acceptable by both horizontal and vertical polarised antenna types.",
          "It can be used for broadband applications due to wider bandwidth.",
          "It can be used at HF/VHF frequencies for transmission and reception.",
          "It offers higher directivity.",
          "It is very robust in construction.",
        ],
        disadvantages: [
          "It is large in size. This requires more space for installation.",
          "For higher number of turns its efficiency decreases. The maximum efficiency of about 80% can be achieved with the use of 3 to 4 turns.",
          "It is higher in cost.",
        ],
      },
      {
        id: 3.2,
        title: "Yagi-Uda Antenna",
        slug: "yagi-uda-antenna",
        detail: [
          {
            image: "/antenna_images/yagi-antenna-300x181.jpg",
            description:
              "Another antenna that makes use of passive elements is the Yagi-Uda antenna. This type of antenna is inexpensive and effective. It can be constructed with one or more reflector elements and one or more director elements.",
          },
          {
            description:
              "Yagi antennas can be made by using an antenna with one reflector, a driven folded-dipole active element, and directors, mounted for horizontal polarization in the forward direction.",
          },
        ],
        advantages: [
          "It is simple to build.",
          "It is a compact size and also it is must in lightweight.",
          "It offers wide bandwidth due to the use of folded dipole.",
          "It is lower cost because easy of handling and maintenance.",
          "It offers a unidirectional radiation pattern which is reasonably good.",
          "It offers substantial increases in directivity and gains compared to the considered simple dipole antenna.",
          "It can be easily mounted with standard mechanical fixings on vertical poles or other poles.",
          "High gain is achieved about to 7 dB. ",
          "Less amount of power is wasted.",
          "Frequency coverage is broad. ",
        ],
        disadvantages: [
          "It is sensitive to frequency.",
          "It does not offer very high gain limited around 20 dB. ",
          "The design is obstructive in nature.",
          "Bandwidth is reduced if a number of director element is used in the array.",
          "Need a large number of elements to be used.",
          "It is prone to noise. ",
          "It is also prone to atmospheric effect. ",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Microwave Antennas",
    slug: "microwave-antennas",
    detail: [
      {
        image: "/antenna_images/microwave-antenna.png",
        description:
          "Microwave antennas are used in the microwave frequency range. These antennas are used in radar systems, satellite communication systems, and so on. These antennas are further classified into two types.",
      },
    ],
    advantages: [
      "Perhaps one of the biggest advantages of using a microwave antenna is its low cost.",
      "Microwave communication systems are popular for their efficiency in transmitting even huge quantities of data due to their high frequencies.",
    ],
    disadvantages: [
      "Despite their efficiency in transmitting signals, microwave radio systems are still susceptible to electromagnetic interference (EMI), which can degrade or obstruct the efficiency of microwave signals.",
      "One of the biggest challenges for microwave radio systems is the fact that microwave signals cannot pass through solid objects. ",
    ],
    subAntennas: [
      {
        id: 4.1,
        title: "Rectangular Microstrip Antennas",
        slug: "rectangular-microstrip-antennas",
        detail: [
          {
            image: "/antenna_images/Rectangular-Microstrip-antennas.png",
            description:
              "For spacecraft or aircraft applications – based on the specifications such as size, weight, cost, performance, ease of installation, etc. – low profile antennas are preferred. ",
          },
          {
            description:
              "These antennas are known as rectangular microstrip antennas or patch antennas; they only require space for the feed line which is normally placed behind the ground plane. The major disadvantage of using these antennas is their inefficient and very narrow bandwidth, which is typically a fraction of a percent or, at the most, a few percent.",
          },
        ],
        advantages: [
          "They operate at microwave frequencies where traditional antennas are not feasible to be designed.",
          "This antenna type has smaller size and hence will provide small size end devices.",
          "The microstrip based antennas are easily etched on any PCB and will also provide easy access for troubleshooting during design and development.",
          "The microstrip patches of various shapes e.g. rectangular, square, triangular etc. are easily etched.",
          "They have lower fabrication cost and hence they can be mass manufactured.",
          "They are capable of supporting multiple frequency bands (dual, triple).",
          "They support dual polarization types viz. linear and circular both.",
        ],
        disadvantages: [
          "The spurious radiation exists in various microstrip based antennas such as microstrip patch antenna, microstrip slot antenna and printed dipole antenna.",
          "It offers low efficiency due to dielectric losses and conductor losses.",
          "It offers lower gain.",
          "It has higher level of cross polarization radiation.",
          "It has lower power handling capability.",
          "It has inherently lower impedance bandwidth.",
          "The microstrip antenna structure radiates from feeds and other junction points.",
        ],
      },
      {
        id: 4.2,
        title: "Planar Inverted-F Antennas",
        slug: "planar-inverted-f-antennas",
        detail: [
          {
            image: "/antenna_images/Planar_Inverted_F-Shaped_Antenna.jpg",
            description:
              "A Planar Inverted-F Antenna can be considered as a type of linear Inverted F antenna (IFA) in which the wire radiating element is replaced by a plate to increase the bandwidth. ",
          },
          {
            description:
              "The advantage of these antennas is that they can be hidden into the housing of the mobile when compared to different types of antennas like a whip, rod, or helical antennas, etc.",
          },
          {
            description:
              "The other advantage is that they can reduce the backward radiation towards the top of the antenna by absorbing power, which enhances the efficiency. They provide high gain in both horizontal and vertical states. This feature is most important for any kind of antennas used in wireless communications.",
          },
        ],
        advantages: [
          "It is very economical as it uses same PCB used for other RF components for its fabrication.",
          "The antenna is compact and small in size compare to monopole antenna.",
          "It does not require any external components for impedance matching due to intermediate feed point.",
          "Bandwidth of the PIFA can be adjusted by varying the size of GND plane.",
        ],
        disadvantages: [
          "It offers narrow bandwidth. Lengthening inverted-F antenna can provide wider bandwidth but at the cost of increase in radiation resistance. Other techniques are also employed for achieving wider bandwidth.",
          "As it uses microstrip line structure for its construction, refer drawbacks of microstrip line as it can be applied to PIFA also.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Reflector Antennas",
    slug: "reflector-antennas",
    detail: [
      {
        image: "/antenna_images/reflector-antenna.jpg",
        description:
          "Reflector antennas are used to increase the gain of the antenna. These antennas are further classified into two types. .",
      },
    ],
    advantages: [
      "It can be used both as transmitting antenna and receiving antenna due to principle of reciprocity.",
      "The feed can be used in various modes with parabolic reflector viz. centre feed, cassegrain feed or offset feed. Each of these configurations have their respective benefits and applications.",
      "Smaller size and low cost",
    ],
    disadvantages: [
      "Feed antenna and reflector disc block certain amount of radiation from the main parabolic reflector antenna. This is about 1 to 2%.",
      "The design of parabolic reflector is a complex process.",
      "Inspite of feed horn at focus and uniform illumination, certain amount of power from feed is bound to slop over the edges of parabolic reflector. This power is responsible to form side lobes in the radiation pattern.",
      "Surface distortions can occur in very large dish. This is reduced by using wide mesh instead of continuous surface.",
      "In order to achieve best performance results, feed should be placed exactly at the focus of the parabolic reflector antenna. This is difficult to achieve practically.",
    ],
    subAntennas: [
      {
        id: 5.1,
        title: "Corner Reflector Antenna",
        slug: "corner-reflector-antenna",
        detail: [
          {
            image: "/antenna_images/Corner-reflector-antenna.jpeg",
            description:
              "The antenna that comprises one or more dipole elements placed in front of a corner reflector, is known as a corner-reflector antenna. The directivity of an antenna can be increased by using reflectors.",
          },
          {
            description:
            "In the case of a wire antenna, a conducting sheet is used behind the antenna for directing the radiation in the forward direction.",
          }
        ],
        advantages: [
          "It offers ease of construction.",
          "It possesses high directivity by reflecting the electromagnetic wave in the direction of its source.",
        ],
        disadvantages: [
          "Its presence makes the antenna arrangement quite bulky.",
          "The use of this reflector increases the cost of the corner reflector antenna.",
        ],
      },
      {
        id: 5.2,
        title: "Parabolic-Reflector Antenna",
        slug: "parabolic-reflector-antenna",
        detail: [
          {
            image: "/antenna_images/parabolic-reflector-antenna.png",
            description:
              "The radiating surface of a parabolic antenna has very large dimensions compared to its wavelength. The geometrical optics, which depend upon rays and wavefronts, are used to know about certain features of these antennas.",
          },
          {
            description:
              "Certain important properties of these antennas can be studied by using ray optics, and of other antennas by using electromagnetic field theory.",
          },
          {
            image: "/antenna_images/parabolic-antenna-300x220.jpg",
            description:
              "One of the useful properties of this antenna is the conversion of a diverging spherical wavefront into a parallel wavefront that produces a narrow beam of the antenna. The various types of feeds that use this parabolic reflector include horn feeds, Cartesian feeds, and dipole feeds.",
          },
        ],
        advantages: [
          "It can be used both as transmitting antenna and receiving antenna due to principle of reciprocity.",
          "The feed can be used in various modes with parabolic reflector viz. centre feed, cassegrain feed or offset feed. Each of these configurations have their respective benefits and applications.",
          "Smaller size and low cost",
        ],
        disadvantages: [
          "Feed antenna and reflector disc block certain amount of radiation from the main parabolic reflector antenna. This is about 1 to 2%.",
          "The design of parabolic reflector is a complex process.",
          "Inspite of feed horn at focus and uniform illumination, certain amount of power from feed is bound to slop over the edges of parabolic reflector. This power is responsible to form side lobes in the radiation pattern.",
          "Surface distortions can occur in very large dish. This is reduced by using wide mesh instead of continuous surface.",
          "In order to achieve best performance results, feed should be placed exactly at the focus of the parabolic reflector antenna. This is difficult to achieve practically.",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Aperture Antennas",
    slug: "aperture-antennas",
    detail: [
      {
        image: "/antenna_images/Apertures-antenna.jpg",
        description:
          "A class of directional antennas, Aperture Antennas have an opening in the surface. Usually, aperture antenna consists of Dipole or Loop Antenna in a guiding structure with an opening to emit radio waves.",
      },
    ],
    advantages: [
      "Radiation is greater than two-wire transmission line",
      "Radiation is Omni-directional",
    ],
    disadvantages: ["VSWR increases", "Poor radiation"],
    subAntennas: [
      {
        id: 6.1,
        title: "Slot Antenna",
        slug: "slot-antenna",
        detail: [
          {
            image: "/antenna_images/slot-antenna.png",
            description:
              "A type of aperture antenna which contains one or more slots cut on the surface of the waveguide. They are usually used in microwave frequencies and have an omnidirectional radiation pattern.",
          },
        ],
        advantages: [
          "It can be fabricated and concealed within metallic objects.",
          "It can provide covert communications with a small transmitter.",
          "Slot antenna radiation patterns are broadly directional. However, they are not omni-directional like wheel antennas.",
        ],
        disadvantages: [
          "Higher cross-polarization levels.",
          "Lower radiation efficiency.",
          "Waveguide slot antennas are heavy compared to their dipole equivalents.",
        ],
      },
      {
        id: 6.2,
        title: "Horn Antenna",
        slug: "horn-antenna",
        detail: [
          {
            image: "/antenna_images/horn-antenna1.jpg",
            description:
              "One of the most popular antennas is the Horn Antenna, which effects the transition between transmission line and wave propagating in free space. It acts as a natural extension to a waveguide. The horn antenna is a type of aperture antenna that is used in the microwave frequency range.",
          },
        ],
        advantages: [
          "It is simple in construction.",
          "It delivers adequate directivity.",
          "It offers bandwidth of about 10%.",
          "Horn antenna along with parabolic reflector disc can deliver high gain.",
        ],
        disadvantages: [
          "Horn antenna radiates energy in spherical wave front shape, as a result horn antenna does not provide sharp/directive beam.",
          "Usually gain of horn antenna is limited to 20dB. This is due to the fact that in order to increase the gain when the horn opening is made larger, the length of horn also becomes excessive.",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Lens Antennas",
    slug: "lens-antennas",
    detail: [
      {
        image: "/antenna_images/Lens-antenna.jpg",
        description:
          "The lens antennas use the curved surface for both transmission and reception. Lens antennas are made up of glass, where the converging and diverging properties of lens are followed. The lens antennas are used for higher frequency applications.",
      },
      {
        description:
          "The frequency range of usage of lens antenna starts at 1000 MHz but its use is greater at 3000 MHz and above.",
      },
      {
        description:
          "Used as wide band antenna. Especially used for Microwave frequency applications.",
      },
    ],
    advantages: [
      "The main advantage of lens antenna is that feed antennas in the design do not obstruct the aperture.",
      "Unlike the parabolic reflector, in lens antenna, the aperture of the antenna is not obstructed by the feed point.",
      "It offers more flexibility in design tolerance, this means twisting in a lens antenna is possible. This is due to the reason that wave incident at one side and emerges from the other.",
      "It is used for very high-frequency applications.",
    ],
    disadvantages: [
      "The disadvantage of lens antennas is that they are costlier for same gain/bandwidth in comparison to reflector antenna.",
      "The low-frequency use of lens antenna makes the antenna arrangement heavy and bulky.",
      "These antennas are more expensive than reflector antenna for the same gain and bandwidth.",
    ],
  },
  {
    id: 8,
    title: "Array Antennas",
    slug: "array-antennas",
    detail: [
      {
        image: "/antenna_images/antenna_arrays.jpg",
        description:
          "An antenna array is a radiating system, which consists of individual radiators and elements. Each of this radiator, while functioning has its own induction field. The elements are placed so closely that each one lies in the neighbouring one’s induction field. ",
      },
      {
        description:
          "Therefore, the radiation pattern produced by them, would be the vector sum of the individual ones. The following image shows another example of an antenna array.",
      },
      {
        description:
          "Used in satellite communications, wireless communications, military radar communications, astronomical study",
      },
    ],
    advantages: [
      "It offers high directivity. Also, the directivity can be varied by choosing a proper number of elements according to the need.",
      "The strength of the transmitted signal significantly increased.",
      "It offers beam steering electronically. Thus, the direction of the beam can be changed from one point to another.",
      "It provides a better signal to noise ratio.",
      "With the application of non-uniform input to each element, the radiation pattern can be shaped according to the requirement.",
      "The design of the antenna array supports better antenna performance.",
    ],
    disadvantages: [
      "Due to configuring a large number of antennas, the structure of antenna array is large thus needs large space.",
      "The bulkiness of the antenna array makes its maintenance somewhat difficult.",
      "In the array, there are increased resistive losse",
    ],
    subAntennas: [
      {
        id: 8.1,
        title: "Two-Element Array Antenna",
        slug: "two-element-array-antenna",
        detail: [
          {
            image: "/antenna_images/two-element-array-antenna.png",
            description:
              "The designed two element antenna array consists of two U-shaped patch of similar dimensions as that of single U-shaped antenna with corporate feeding technique and have quarter wave transformers for impedance matching.",
          },
          {
            description:
              "The input impedance of the feeding network is of 50Ω and SMA connector of same impedance is used.",
          },
        ],
        advantages: [
          " A more focused radiation pattern will also extend the communication range.",
          "To create a more directive radiation pattern, the size of the antenna must be increased",
        ],
        disadvantages: [
          "The two-element array antenna is more expensive than a single-element antenna.",
          "The two-element array antenna is more complex than a single-element antenna.",
        ],
      },
      {
        id: 8.2,
        title: "Linear Array Antenna",
        slug: "linear-array-antenna",
        detail: [
          {
            image: "/antenna_images/Linear-array-antenna.ppm",
            description:
              "In a linear antenna array, antenna elements are placed along one axis. The antenna array produces a beam, this beam can effect by changing the geometry (linear, circular, spherical etc.) and also by some other parameters i.e. inter-element spacing, excitation amplitude and excitation phase of the individual element.",
          },
         
          {
            description:
              "Some applications of antenna array include radar, sonar, satellite communication and mobile communication.",
          },
        ],
        advantages: [
          "Design of antenna is practical and simpler.",
          "Easy fabrication",
          "Individual elements may be wire dipoles, loops apertures or any other type",
        ],
        disadvantages: [
          "Due to configuring a large number of antennas, the structure of antenna array is large thus needs large space.",
          "The bulkiness of the antenna array makes its maintenance somewhat difficult.",
          "In the array, there are increased resistive losse",
        ],
      },
      {
        id: 8.3,
        title: "Phased Array Antenna",
        slug: "phased-array-antenna",
        detail: [
          {
            image: "/antenna_images/phased-array-antenna.png",
            description:
              "A phased array is a group of sensors located at distinct spatial locations in which the relative phases of the sensor signals are varied in such a way that the effective propagation pattern of the array is reinforced in a desired direction and suppressed in undesired directions.",
          },
          {
            description:
              "Phased array antennas include multiple emitters and are used for beamforming in high-frequency RF applications. Three common application areas are in WiFi, chirped radar, and 5G. The number of emitters in a phased array antenna can range from a few into the thousands.",
          },
        ],
        advantages: [
          "It offers higher directivity. The higher the number of elements in an array, higher is the directivity.",
          "It provides electronic steering and hence cumbersome mechanical steering using servo motors can be avoided. Hence beam can be moved in the desired direction in less than milliseconds.",
          "It can be used for surveillance and tracking in radar.",
          "It can emit multiple beams simultaneously to deliver multifunction operations.",
          "Beam steering is possible in two planes using planar array configuration. Digital beamforming is also possible.",
          "Linear array configuration requires very simple arrangement of elements.",
        ],
        disadvantages: [
          "The coverage is limited to 120 degrees in both azimuth and elevation.",
          "Lower frequency agility can be achieved.",
          "Ray deflection is possible only in single plane using linear array configuration.",
          "Planar array configuration is very complex and requires phase shifter with advanced electronic controls.",
          "It is available at higher costs.",
        ],
      },
    ],
  },
];
