// Fundamental Parameters of Antennas (Characteristics)
export const Properties = [
  {
    id: 1,
    name: "Radiation Pattern",
    description: [
      "A practical antenna cannot radiate energy in all directions with equal strength. Radiation from an antenna is usually found to be maximum in one direction whereas it is minimum or almost zero in other directions.",

      "Field Strength is the quantity that is used to represent the radiation pattern of an antenna. It is usually measured at a point located at a particular distance from the antenna.",

      "You can measure field strength by calculating voltage at two different points on an electric line and dividing the result with the distance between the two points. Hence, the units of field strength are volts per meter.",

      "Graphically speaking, the field of strength is plotted as a three-dimensional graph as it is the measure of the electromagnetic field strength at equidistant points from the antenna.",

      "If the graph of radiation of antenna is just a function of direction, then it is simply called as Radiation Pattern. But if it is expressed in terms of the electric field strength in V/m, then it is called Field Strength (or Radiation) Pattern.",
    ],
  },
  {
    id: 2,
    name: "Radiation Intensity",
    description: [
      "The radiation intensity of an antenna is the power per unit solid angle. It is represented by U and is independent to distance from the antenna. Units of radiation intensity are Watts per steradian (W/Sr).",
    ],
  },
  {
    id: 3,
    name: "Directivity and Gain",
    description: [
      "Ideally, an antenna which radiates energy in all directions equally i.e. an omnidirectional antenna is called as Isotropic Antenna. This is just a hypothetical situation and an isotropic antenna doesn’t exist in practice.",

      "But if we consider an isotropic antenna, then its power density will be same at all points on the sphere of radiation. Hence, the average power of an antenna as a function of radiated power is",

      "Pavg = Prad / 4πr2 W/m2",

      "The ratio of power density to the average power radiated is known as Directive Gain. ",

      "Directivity of an Antenna is a measure of concentration of radiation in the direction of maximum radiation or the ratio of maximum power density to average power radiated.",
    ],
  },
  {
    id: 4,
    name: " Radiation Efficiency and Power Gain",
    description: [
      "All practical antennas will have Ohmic losses as they are made up of conducting materials with finite conductivity. Radiation Efficiency is ratio of radiated power to the input power.",

      "ηr = Prad / Pin",

      "Power Gain of an Antenna is the ratio of the power radiated in a direction to the total input power.",
    ],
  },
  {
    id: 5,
    name: "Input Impedance",
    description: [
      "We should take care to match the input impedance of the antenna to that of the input transmission line. If the input impedance doesn’t match, then the system degrades over time due to the reflected power.",
    ],
  },
  {
    id: 6,
    name: "Effective Length",
    description: [
      "The length of an imaginary linear antenna with uniformly distributed current is defined as the Effective Length of an antenna such that both these antennas have same far field in π/2 plane.",
      "The effective length is the parameter of antennas that characterizes the efficiency of the antennas in transmitting and receiving electromagnetic waves. Effective length can be defined for both transmitting and receiving antennas. The ratio of EMF at the receiver input to the intensity of the electric field that occurred on the antenna is known as the receivers’ effective length.",
      " The effective length of the transmitter can be defined as the length of the free space in a conductor, and current distribution across its length generates the same field intensity in any direction of radiation.",
      "Effective Length = (Area under non-uniform current distrbution)/(Area under uniform current distribution)",
    ],
  },
  {
    id: 7,
    name: "Bandwidth",
    description: [
      "The bandwidth of antenna is defined as the range of frequencies over which the characteristics of the antenna are maintained to the specified value. This is because, the requirements for the characteristics of an antenna like the gain, impedance, standing wave ratio etc. may change during operation.",
    ],
  },
  {
    id: 8,
    name: "Effective Aperture",
    description: [
      "Generally, the term effective aperture or effective area is associated with the receiving antenna. Effective Aperture or Area of an antenna is the measure of the ability of an antenna to extract energy from the electromagnetic wave.",
      "Effective Aperture of an antenna is the ratio of the Power Received at the load to the average power density produced by the antenna.",
    ],
  },
  {
    id: 9,
    name: " Antenna Polarization",
    description: [
      "The Antenna Polarization refers to the physical orientation of the electromagnetic wave radiated in a given direction. Polarization of an EM Wave is a time varying direction and relative magnitude of the electric field vector.",
      "If the direction is not specified, then the polarization in the direction of maximum gain is considered.",
      "An electromagnetic wave launched from an antenna may be polarized vertically and horizontally. If the wave gets polarized in the vertical direction, then the E vector is vertical and it requires a vertical antenna. If vector E is in a horizontal way, it needs a horizontal antenna to launch it. Sometimes, circular polarization is used, it is a combination of both horizontal and vertical ways.",
    ],
  },
  {
    id: 10,
    name: " Antenna Gain",
    description: [
      "The parameter that measures the degree of directivity of the antenna’s radial pattern is known as gain. An antenna with a higher gain is more effective in its radiation pattern. Antennas are designed in such a way that power raises in the wanted direction and decreases in unwanted directions.",
      "G = (power radiated by an antenna)/(power radiated by reference antenna)",
    ],
  },
  {
    id: 11,
    name: "Aperture",
    description: [
      "This aperture is also known as the effective aperture of the antenna that actively participates in the transmission and reception of electromagnetic waves. The power received by the antenna gets associated with the collective area. This collected area of an antenna is known as effective aperture.",

      "Pr = Pd*A watts",
      "A=pr/ pd m2",
    ],
  },
  {
    id: 12,
    name: "Directivity and Bandwidth",
    description: [
      "The directive of an antenna is defined as the measure of concentrated power radiation in a particular direction. It may be considered as the capability of an antenna to direct radiated power in a given direction.",
      "It can also be noted as the ratio of the radiation intensity in a given direction to the average radiation intensity. Bandwidth is one of the desired parameters to choose an antenna.",
      "It can be defined as the range of frequencies over which an antenna can properly radiate energy and receives energy.",
    ],
  },
  {
    id: 13,
    name: "Polar Diagram",
    description: [
      "The most significant property of an antenna is its radiation pattern or polar diagram. In the case of a transmitting antenna, this is a plot that discusses about the strength of the power field radiated by the antenna in various angular directions as shown in the plot below. A plot can also be obtained for both vertical and horizontal planes – and, it is also named as vertical and horizontal patterns, respectively.",
    ],
  },
];
