const questions = [
  {
    id: 1,
    question: "¿En qué año fue fundado el Imperio Otomano?",
    options: ["1299", "1326", "1389", "1453"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 2,
    question: "¿En qué año Constantinopla fue conquistada por los otomanos?",
    options: ["1453", "1492", "1517", "1529"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 3,
    question: "¿Cuántos años duró el Imperio Otomano aproximadamente?",
    options: ["623 años", "500 años", "700 años", "450 años"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 4,
    question: "¿Cuándo se disolvió oficialmente el Imperio Otomano?",
    options: ["1922", "1918", "1924", "1920"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 5,
    question: "¿Quién fue el primer sultán del Imperio Otomano?",
    options: ["Osman I", "Orhan I", "Murad I", "Bayezid I"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 6,
    question: "¿En qué batalla los otomanos derrotaron definitivamente a los serbios en 1389?",
    options: ["Batalla de Kosovo", "Batalla de Varna", "Batalla de Mohács", "Batalla de Lepanto"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 7,
    question: "¿Qué evento histórico de 1453 marcó el fin del Imperio Bizantino?",
    options: ["La Caída de Constantinopla", "La Batalla de Manzikert", "La Cuarta Cruzada", "La Batalla de Adrianópolis"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 8,
    question: "¿En qué batalla los otomanos fueron derrotados por los europeos en 1571?",
    options: ["Batalla de Lepanto", "Batalla de Viena", "Batalla de Mohács", "Batalla de Kosovo"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 9,
    question: "¿Qué tratado puso fin a la guerra austro-turca de 1683-1699?",
    options: ["Tratado de Karlowitz", "Tratado de Kuchuk Kainarji", "Tratado de Lausana", "Tratado de París"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 10,
    question: "¿En qué año se firmó el Armisticio de Mudros que marcó la derrota otomana en la Primera Guerra Mundial?",
    options: ["1918", "1917", "1919", "1920"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 11,
    question: "¿Quién lideró la revolución que llevó a la abolición del sultanato en 1922?",
    options: ["Mustafa Kemal Atatürk", "Enver Pachá", "Talat Pachá", "Cemal Pachá"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 12,
    question: "¿Cuál fue la primera capital del Imperio Otomano?",
    options: ["Söğüt", "Bursa", "Edirne", "Estambul"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 13,
    question: "¿En qué año los otomanos conquistaron Bursa?",
    options: ["1326", "1354", "1389", "1402"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 14,
    question: "¿En qué batalla Bayezid I fue derrotado por Tamerlán en 1402?",
    options: ["Batalla de Ankara", "Batalla de Kosovo", "Batalla de Varna", "Batalla de Mohács"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 15,
    question: "¿Qué período de interregno sufrió el Imperio Otomano tras la derrota de Bayezid I?",
    options: ["Otomano Interregno", "Gran Cisma", "Período de Anarquía", "Siglo de Oro"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 16,
    question: "¿En qué año los otomanos conquistaron Egipto?",
    options: ["1517", "1501", "1520", "1535"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 17,
    question: "¿Qué sultán conquistó Egipto y puso fin al sultanato mameluco?",
    options: ["Selim I", "Suleiman I", "Bayezid II", "Mehmed II"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 18,
    question: "¿En qué año los otomanos fallaron en su segundo asedio de Viena?",
    options: ["1683", "1529", "1688", "1700"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 19,
    question: "¿Qué guerra entre 1768 y 1774 resultó en territorios perdidos para los otomanos?",
    options: ["Guerra ruso-turca", "Guerra austro-turca", "Guerra greco-turca", "Guerra persa-otomana"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 20,
    question: "¿En qué año se firmó el Tratado de Kuchuk Kainarji?",
    options: ["1774", "1699", "1832", "1920"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 21,
    question: "¿Qué movimiento reformista del siglo XIX intentó modernizar el Imperio Otomano?",
    options: ["Tanzimat", "Yuksek Divan", "Diwan", "Meclis"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 22,
    question: "¿En qué año comenzó el período de las Reformas Tanzimat?",
    options: ["1839", "1856", "1876", "1800"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 23,
    question: "¿Qué nombre recibía el parlamento otomano establecido en 1876?",
    options: ["Meclis-i Mebusan", "Divan Imperial", "Senado Otomano", "Consejo de Estado"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 24,
    question: "¿Quién fue el último sultán del Imperio Otomano?",
    options: ["Mehmed VI", "Mehmed V", "Abdulhamid II", "Murad V"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 25,
    question: "¿En qué año fue abolido el califato otomano?",
    options: ["1924", "1922", "1920", "1918"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 26,
    question: "¿Qué genocidio masivo ocurrió durante el Imperio Otomano en 1915?",
    options: ["Genocidio Armenio", "Genocidio Griego", "Genocidio Asirio", "Todos los anteriores"],
    correctIndex: 3,
    category: "Historia General"
  },
  {
    id: 27,
    question: "¿En qué batalla los otomanos lograron su primera gran victoria contra los cruzados?",
    options: ["Batalla de Nicópolis", "Batalla de Varna", "Batalla de Kosovo", "Batalla de Mohács"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 28,
    question: "¿Qué cruzada fracasó estrepitosamente contra los otomanos en 1444?",
    options: ["Cruzada de Varna", "Cruzada de Nicópolis", "Cruzada de Barcelona", "Cruzada de Trento"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 29,
    question: "¿En qué año los otomanos conquistaron Hungría tras la Batalla de Mohács?",
    options: ["1526", "1453", "1517", "1571"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 30,
    question: "¿Qué imperio fue el principal rival de los otomanos en el este?",
    options: ["Imperio Persa (Safávida)", "Imperio Mogol", "Imperio Ruso", "Imperio Bizantino"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 31,
    question: "¿Qué reforma de 1856 prometió igualdad para todos los ciudadanos otomanos?",
    options: ["Edicto de Reforma (Islahat)", "Edicto de Gülhane", "Edicto de Tanzimat", "Edicto Imperial"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 32,
    question: "¿En qué año se firmó el Tratado de Lausana que reconoció la República de Turquía?",
    options: ["1923", "1920", "1922", "1924"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 33,
    question: "¿Qué conflicto entre 1853 y 1856 involucró a los otomanos contra Rusia?",
    options: ["Guerra de Crimea", "Guerra Ruso-Turca", "Guerra del Cáucaso", "Guerra de los Balcanes"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 34,
    question: "¿Qué país balcánico logró independizarse del Imperio Otomano en 1821?",
    options: ["Grecia", "Serbia", "Bulgaria", "Rumanía"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 35,
    question: "¿En qué año Egipto se declaró nominalmente independiente del Imperio Otomano bajo Mehmet Alí?",
    options: ["1805", "1830", "1867", "1882"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 36,
    question: "¿Qué sultán implementó la Prisión Dorada para mantener a sus hermanos encarcelados?",
    options: ["Mehmed II", "Bayezid II", "Suleiman I", "Selim I"],
    correctIndex: 1,
    category: "Historia General"
  },
  {
    id: 37,
    question: "¿En qué batalla los otomanos capturaron al rey húngaro Luis II en 1526?",
    options: ["Batalla de Mohács", "Batalla de Viena", "Batalla de Buda", "Batalla de Esztergom"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 38,
    question: "¿Qué ciudad fue la capital otomana antes de Estambul?",
    options: ["Edirne", "Bursa", "Söğüt", "Konya"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 39,
    question: "¿En qué año los otomanos capturaron Edirne (Adrianópolis)?",
    options: ["1362", "1389", "1402", "1453"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 40,
    question: "¿Qué acontecimiento de 1908 restauró la constitución otomana?",
    options: ["Revolución de los Jóvenes Turcos", "Revolución Francesa", "Revolución de Tanzimat", "Revolución Constitucional"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 41,
    question: "¿Qué nombre tenía la coalición de los Jóvenes Turcos?",
    options: ["Comité de Unión y Progreso", "Partido de la Libertad", "Liga Nacional", "Frente de Reforma"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 42,
    question: "¿En qué año los italianos invadieron Libia otomana?",
    options: ["1911", "1912", "1913", "1910"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 43,
    question: "¿Qué guerras de los Balcanes (1912-1913) resultaron en enormes pérdidas territoriales otomanas?",
    options: ["Guerras Balcánicas", "Guerras del Este", "Guerras de los Cielos", "Guerras Imperiales"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 44,
    question: "¿En qué año entró el Imperio Otomano en la Primera Guerra Mundial?",
    options: ["1914", "1915", "1916", "1913"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 45,
    question: "¿En qué batalla de 1915-1916 los otomanos defendieron Gallípoli con éxito?",
    options: ["Batalla de Gallípoli", "Batalla de Mesopotamia", "Batalla del Sinaí", "Batalla de Cemal Pachá"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 46,
    question: "¿Qué sistema de gobierno existía en el Imperio Otomano antes del Tanzimat?",
    options: ["Monarquía absoluta", "República", "Teocracia parlamentaria", "Feudalismo puro"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 47,
    question: "¿Qué nombre recibía el consejo consultivo del sultán?",
    options: ["Divan Imperial", "Meclis", "Senado", "Parlamento"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 48,
    question: "¿En qué año los otomanos se aliaron con Alemania en la Primera Guerra Mundial?",
    options: ["1914", "1915", "1916", "1913"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 49,
    question: "¿Qué conflicto entre 1877 y 1878 resultó en la independencia de Rumanía, Serbia y Montenegro?",
    options: ["Guerra Ruso-Turca", "Guerra de los Balcanes", "Guerra de Crimea", "Guerra Búlgaro-Turca"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 50,
    question: "¿En qué año Mehmed II promulgó su primer Kanunname (código legal)?",
    options: ["1453", "1470", "1481", "1460"],
    correctIndex: 0,
    category: "Historia General"
  },
  {
    id: 51,
    question: "¿Quién fue conocido como 'el Conquistador' después de tomar Constantinopla?",
    options: ["Mehmed II", "Suleiman I", "Selim I", "Bayezid I"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 52,
    question: "¿Qué sultán es conocido como 'el Magnífico' o 'el Legislador'?",
    options: ["Suleiman I", "Mehmed II", "Selim I", "Murad III"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 53,
    question: "¿Quién fue el sultán otomano durante la Batalla de Lepanto?",
    options: ["Selim II", "Suleiman I", "Murad III", "Mehmed III"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 54,
    question: "¿Qué sultán fue conocido como 'el Piadoso'?",
    options: ["Suleiman I", "Bayezid II", "Mehmed II", "Abdulhamid II"],
    correctIndex: 1,
    category: "Sultanes"
  },
  {
    id: 55,
    question: "¿Quién fue el sultán que depuso a su hermano Bayezid I después del Interregno?",
    options: ["Mehmed I", "Murad II", "Mustafa", "Cem"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 56,
    question: "¿Qué sultán fue conocido como 'el Carnicero' por sus masacres?",
    options: ["Selim I", "Mehmed II", "Suleiman I", "Murad I"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 57,
    question: "¿Cuántos hijos tuvo Suleiman I con Hurrem Sultan?",
    options: ["Seis", "Cuatro", "Ocho", "Dos"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 58,
    question: "¿Quién fue el sultán que gobernó durante 46 años, el reinado más largo?",
    options: ["Suleiman I", "Mehmed II", "Abdulhamid II", "Murad III"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 59,
    question: "¿Qué sultán fue el primero en usar el título de Califa?",
    options: ["Selim I", "Suleiman I", "Mehmed II", "Bayezid I"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 60,
    question: "¿Quién fue el sultán que asesinó a su padre para subir al trono?",
    options: ["Mehmed II", "Murad I", "Bayezid I", "Varios sultanes lo hicieron"],
    correctIndex: 3,
    category: "Sultanes"
  },
  {
    id: 61,
    question: "¿Qué sultán fue depuesto por los Jóvenes Turcos en 1909?",
    options: ["Abdulhamid II", "Mehmed V", "Abdulaziz", "Murad V"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 62,
    question: "¿Quién fue el sultán que concedió la primera constitución otomana en 1876?",
    options: ["Abdulhamid II", "Mehmed V", "Mehmed VI", "Abdulaziz"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 63,
    question: "¿Qué sultán fue encontrado muerto en circunstancias misteriosas en 1876?",
    options: ["Abdulaziz", "Murad V", "Abdulhamid II", "Mehmed V"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 64,
    question: "¿Cuántos hijos tuvo Mehmed II?",
    options: ["Cuatro", "Dos", "Seis", "Ocho"],
    correctIndex: 1,
    category: "Sultanes"
  },
  {
    id: 65,
    question: "¿Quién fue el sultán que gobernó solo 93 días antes de ser depuesto?",
    options: ["Murad V", "Mehmed V", "Mehmed VI", "Abdulaziz"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 66,
    question: "¿Qué sultán fue el primer sultán en viajar a Europa occidental?",
    options: ["Abdulaziz", "Abdulhamid II", "Mehmed V", "Mehmed II"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 67,
    question: "¿En qué año murió Suleiman I durante el sitio de Sigetvár?",
    options: ["1566", "1560", "1571", "1550"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 68,
    question: "¿Quién fue el sultán que sucedió inmediatamente a Suleiman I?",
    options: ["Selim II", "Mustafa", "Bayezid", "Cem"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 69,
    question: "¿Qué sultán fue conocido como 'el Bebedor' por su afición al vino?",
    options: ["Selim II", "Murad III", "Mehmed III", "Bayezid I"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 70,
    question: "¿Quién fue el sultán que ordenó la ejecución de sus 19 hermanos?",
    options: ["Mehmed III", "Mehmed II", "Suleiman I", "Murad I"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 71,
    question: "¿Qué sultán tuvo más de 500 concubinas en su harén?",
    options: ["Murad III", "Suleiman I", "Mehmed II", "Selim I"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 72,
    question: "¿Quién fue el sultán que restauró la constitución en 1908?",
    options: ["Mehmed V", "Abdulhamid II", "Mehmed VI", "Murad V"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 73,
    question: "¿En qué año murió Mehmed II el Conquistador?",
    options: ["1481", "1453", "1492", "1500"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 74,
    question: "¿Qué sultán fue el primero en utilizar armas de fuego en batalla?",
    options: ["Mehmed II", "Suleiman I", "Murad II", "Bayezid I"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 75,
    question: "¿Quién fue el sultán que gobernó durante el período más estable del imperio?",
    options: ["Suleiman I", "Mehmed II", "Abdulhamid II", "Murad III"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 76,
    question: "¿Qué sultán fue conocido por su debilidad mental y fue depuesto tras 3 meses?",
    options: ["Murad V", "Abdulhamid II", "Mehmed V", "Abdulaziz"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 77,
    question: "¿Quién fue el último califa otomano?",
    options: ["Abdulmejid II", "Mehmed VI", "Abdulhamid II", "Mehmed V"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 78,
    question: "¿En qué año fue depuesto Abdulhamid II?",
    options: ["1909", "1908", "1912", "1914"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 79,
    question: "¿Qué sultán fue el primero en tener una esposa legal otomana (Hurrem)?",
    options: ["Suleiman I", "Mehmed II", "Selim I", "Murad III"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 80,
    question: "¿Quién fue el sultán que enfrentó la rebelión de Şeyh Said en 1925?",
    options: ["Mehmed VI", "Mehmed V", "Abdulhamid II", "Abdulmejid II"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 81,
    question: "¿Qué sultán murió en un palacio en San Remo, Italia?",
    options: ["Mehmed VI", "Mehmed V", "Abdulhamid II", "Murad V"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 82,
    question: "¿En qué año fue coronado Selim I como sultán?",
    options: ["1512", "1517", "1520", "1500"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 83,
    question: "¿Quién fue el sultán que expandió el imperio a su máxima extensión territorial?",
    options: ["Suleiman I", "Mehmed II", "Selim I", "Bayezid I"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 84,
    question: "¿Qué sultán fue el primero en ser educado en el sistema de la Prisión Dorada?",
    options: ["Bayezid II", "Mehmed II", "Suleiman I", "Murad I"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 85,
    question: "¿Quién fue el sultán que enfrentó la rebelión de Kara Yazıcı?",
    options: ["Bayezid I", "Murad I", "Mehmed I", "Suleiman I"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 86,
    question: "¿En qué año fue asesinado Mehmed II?",
    options: ["1481", "1453", "1492", "1500"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 87,
    question: "¿Qué sultán tuvo el reinado más corto (menos de 100 días)?",
    options: ["Murad V", "Mehmed VI", "Mehmed V", "Abdulaziz"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 88,
    question: "¿Quién fue el sultán que tuvo como Gran Visir a Ibrahim Pachá?",
    options: ["Suleiman I", "Mehmed II", "Murad III", "Selim II"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 89,
    question: "¿Qué sultán fue depuesto por su propio hijo?",
    options: ["Mehmed I", "Murad I", "Bayezid I", "Suleiman I"],
    correctIndex: 2,
    category: "Sultanes"
  },
  {
    id: 90,
    question: "¿En qué año accedió al trono Mehmed II por primera vez?",
    options: ["1444", "1453", "1481", "1430"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 91,
    question: "¿Quién fue el sultán que construyó la Mezquita Azul?",
    options: ["Ahmed I", "Suleiman I", "Mehmed II", "Abdulhamid II"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 92,
    question: "¿Qué sultán fue conocido por su crueldad hacia los cristianos?",
    options: ["Murad I", "Mehmed II", "Suleiman I", "Bayezid II"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 93,
    question: "¿En qué año fue asesinado Selim I?",
    options: ["1520", "1512", "1517", "1500"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 94,
    question: "¿Quién fue el sultán que enfrentó la crisis de sucesión más larga?",
    options: ["Mehmed I", "Bayezid I", "Murad I", "Suleiman I"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 95,
    question: "¿Qué sultán fue el primero en usar el título de 'Sah' (rey de reyes)?",
    options: ["Suleiman I", "Mehmed II", "Selim I", "Abdulhamid II"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 96,
    question: "¿En qué año nació Suleiman I?",
    options: ["1494", "1490", "1500", "1485"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 97,
    question: "¿Quién fue el sultán que permitió que los príncipes gobernar provincias?",
    options: ["Murad I", "Mehmed II", "Suleiman I", "Bayezid I"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 98,
    question: "¿Qué sultán tuvo una relación famosa con su esclava favorita, Hürrem?",
    options: ["Suleiman I", "Mehmed II", "Murad III", "Selim II"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 99,
    question: "¿Qué sultán abolió el sistema de ejecutar hermanos y lo sustituyó por la prisión?",
    options: ["Mehmed II", "Bayezid II", "Suleiman I", "Murad I"],
    correctIndex: 1,
    category: "Sultanes"
  },
  {
    id: 100,
    question: "¿Quién fue el primer sultán en ser depuesto por la nueva constitución?",
    options: ["Abdulhamid II", "Mehmed V", "Murad V", "Mehmed VI"],
    correctIndex: 0,
    category: "Sultanes"
  },
  {
    id: 101,
    question: "¿Cuál era la élite militar del Imperio Otomano, compuesta originalmente por esclavos?",
    options: ["Janízaros", "Akıncılar", "Kapıkulu", "Sipahis"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 102,
    question: "¿Qué sistema de reclutamiento usaban los otomanos para los janízaros?",
    options: ["Sistema Devşirme", "Reclutamiento voluntario", "Reclutamiento feudal", "Reclutamiento tribal"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 103,
    question: "¿Qué arma de asedio utilizó Mehmed II para conquistar Constantinopla?",
    options: ["Cañón gigante (Basilica)", "Catapultas", "Torres de asedio", "Escaleras"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 104,
    question: "¿Cuál era la caballería feudal del Imperio Otomano?",
    options: ["Sipahis", "Janízaros", "Akıncılar", "Levendes"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 105,
    question: "¿Qué tipo de barcos utilizaban los otomanos para la guerra naval?",
    options: ["Galeras", "Galeones", "Fragatas", "Buques de vapor"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 106,
    question: "¿Quién fue el famoso almirante otomano conocido como Barbarroja?",
    options: ["Hayreddin Barbarroja", "Turgut Reis", "Kilic Ali Pachá", "Piri Reis"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 107,
    question: "¿En qué batalla naval los otomanos fueron derrotados por la Liga Santa en 1571?",
    options: ["Batalla de Lepanto", "Batalla de Preveza", "Batalla de Gallípoli", "Batalla de Actium"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 108,
    question: "¿Qué cuerpo militar se especializaba en la guerrilla y las incursiones?",
    options: ["Akıncılar", "Janízaros", "Sipahis", "Topçular"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 109,
    question: "¿Cuál era la unidad de artillería otomana llamada?",
    options: ["Topçular", "Janízaros", "Sipahis", "Akıncılar"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 110,
    question: "¿Qué fortaleza construyeron los otomanos para controlar el Bósforo?",
    options: ["Rumeli Hisarı", "Anadolu Hisarı", "Edirnekapı", "Yedikule"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 111,
    question: "¿En qué batalla los otomanos derrotaron a los húngaros en 1526?",
    options: ["Batalla de Mohács", "Batalla de Varna", "Batalla de Kosovo", "Batalla de Nicópolis"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 112,
    question: "¿Qué arma era el símbolo del poderío militar otomano?",
    options: ["Cañón", "Arco", "Espada", "Lanza"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 113,
    question: "¿Quién fue el gran visir que comandó el ejército otomano en Viena en 1529?",
    options: ["Ibrahim Pachá", "Kara Mustafá", "Lala Mustafá", "Sinan Pachá"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 114,
    question: "¿Cuántos janízaros formaban una compañía (orta)?",
    options: ["100", "50", "200", "500"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 115,
    question: "¿Qué sistema de gobierno militar garantizaba la lealtad de los janízaros?",
    options: ["Sistema Devşirme", "Reclutamiento feudal", "Servicio hereditario", "Servicio mercenario"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 116,
    question: "¿En qué batalla los otomanos conquistaron Belgrado en 1521?",
    options: ["Sitio de Belgrado", "Batalla de Belgrado", "Conquista de Belgrado", "Asalto de Belgrado"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 117,
    question: "¿Qué tipo de caballería otomana estaba dotada de tierras feudales?",
    options: ["Sipahis", "Janízaros", "Akıncılar", "Topçular"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 118,
    question: "¿Quién diseñó el famoso cañón used para bombardear Constantinopla?",
    options: ["Orban", "Leonardo da Vinci", "Mimar Sinan", "Piri Reis"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 119,
    question: "¿Cuál era la fuerza naval principal del Imperio Otomano?",
    options: ["Armada del Estrecho", "Flota del Mar Negro", "Armada Imperial", "Flota del Mediterráneo"],
    correctIndex: 2,
    category: "Militar"
  },
  {
    id: 120,
    question: "¿Qué cuerpo militar otomano era responsable del transporte y logística?",
    options: ["Cebeci", "Janízaros", "Sipahis", "Topçular"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 121,
    question: "¿Cuál fue el primer ejército permanente de Europa?",
    options: ["Janízaros", "Legiones romanas", "Huscarls", "Landsknechts"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 122,
    question: "¿En qué batalla los otomanos capturaron Rodas en 1522?",
    options: ["Sitio de Rodas", "Batalla de Rodas", "Conquista de Rodas", "Asedio de Rodas"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 123,
    question: "¿Qué guerrilleros otomanos luchaban en los Balcanes?",
    options: ["Koçacen", "Sipahis", "Janízaros", "Akıncılar"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 124,
    question: "¿Cuántos janízaros había en el apogeo del imperio?",
    options: ["Más de 100.000", "50.000", "10.000", "200.000"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 125,
    question: "¿Quién fue el comandante otomano en la Batalla de Preveza (1538)?",
    options: ["Hayreddin Barbarroja", "Turgut Reis", "Kilic Ali Pachá", "Piri Reis"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 126,
    question: "¿Qué armas portaban los janízaros originalmente?",
    options: ["Arco y espada", "Arcabuz", "Cañón portátil", "Lanza"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 127,
    question: "¿En qué batalla los otomanos derrotaron a los polacos en 1621?",
    options: ["Batalla de Chotin", "Batalla de Viena", "Batalla de Mohács", "Batalla de Kosovo"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 128,
    question: "¿Qué arma de asedio era un cañón gigante móvil?",
    options: ["Cañón Basilica", "Ballesta gigante", "Torre de asedio", "Ariete"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 129,
    question: "¿Cuántos años duró el sitio de Viena de 1529?",
    options: ["21 días", "1 mes", "3 meses", "1 año"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 130,
    question: "¿Qué cuerpo de élite otomano servía como guardia personal del sultán?",
    options: ["Sepahi-i Hümayun", "Janízaros", "Akıncılar", "Topçular"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 131,
    question: "¿En qué batalla los otomanos capturaron Budapest en 1541?",
    options: ["Sitio de Buda", "Batalla de Budapest", "Conquista de Hungría", "Asedio de Buda"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 132,
    question: "¿Qué tipo de guerreros de élite formaban la caballería otomana?",
    options: ["Sipahis", "Janízaros", "Akıncılar", "Levendes"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 133,
    question: "¿Cuál fue la primera gran derrota naval otomana?",
    options: ["Batalla de Lepanto (1571)", "Batalla de Preveza (1538)", "Batalla de Gallípoli (1915)", "Batalla de Actium"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 134,
    question: "¿En qué año los janízaros se rebelaron por primera vez contra el sultán?",
    options: ["1449", "1500", "1600", "1700"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 135,
    question: "¿Qué reforma militar del siglo XVIII creó los Nizam-i Cedid?",
    options: ["Reforma de Selim III", "Reforma de Mahmud II", "Reforma de Abdulhamid II", "Reforma de Suleiman I"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 136,
    question: "¿Cuál era la unidad táctica básica de los janízaros?",
    options: ["Orta (compañía)", "Tabur (regimiento)", "Tümen (división)", "Kol (ala)"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 137,
    question: "¿En qué batalla los otomanos usaron por primera vez cañones de asedio masivos?",
    options: ["Conquista de Constantinopla (1453)", "Batalla de Kosovo (1389)", "Batalla de Varna (1444)", "Batalla de Mohács (1526)"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 138,
    question: "¿Qué guerrero otomano era un caballero feudal con tierras?",
    options: ["Sipahi", "Janízaro", "Akıncı", "Topçu"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 139,
    question: "¿Cuántos soldados aproximadamente componían el ejército otomano en su apogeo?",
    options: ["Más de 200.000", "50.000", "100.000", "500.000"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 140,
    question: "¿Qué arma de los janízaros se hizo famosa por su precisión?",
    options: ["Arcabuz", "Arco", "Espada", "Lanza"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 141,
    question: "¿Qué tipo de tropas otomanas se especializaban en combate naval?",
    options: ["Levendes", "Janízaros", "Sipahis", "Akıncılar"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 142,
    question: "¿Quién fue el sultán que reformó el ejército creando los Nizam-i Cedid?",
    options: ["Selim III", "Mahmud II", "Abdulhamid II", "Mehmed II"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 143,
    question: "¿En qué batalla los otomanos fueron derrotados por los austríacos en 1683?",
    options: ["Batalla de Viena", "Batalla de Mohács", "Batalla de Kosovo", "Batalla de Lepanto"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 144,
    question: "¿Cuál era la principal fortaleza otomana en los Balcanes?",
    options: ["Fortaleza de Belgrado", "Fortaleza de Sofía", "Fortaleza de Bucarest", "Fortaleza de Atenas"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 145,
    question: "¿Qué cuerpo de élite protegía al sultán en el campo de batalla?",
    options: ["Silahtar", "Janízaros", "Sipahis", "Akıncılar"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 146,
    question: "¿En qué batalla los otomanos capturaron al rey de Hungría?",
    options: ["Batalla de Mohács (1526)", "Batalla de Varna (1444)", "Batalla de Kosovo (1389)", "Batalla de Nicópolis (1396)"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 147,
    question: "¿Qué tipo de fortaleza construían los otomanos en sus fronteras?",
    options: ["Kale (fortaleza)", "Castillo", "Ciudadela", "Baluarte"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 148,
    question: "¿En qué batalla los otomanos derrotaron a los venecianos en 1499?",
    options: ["Batalla de Zonchio", "Batalla de Lepanto", "Batalla de Preveza", "Batalla de Gallípoli"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 149,
    question: "¿Qué unidad militar otomana se especializaba en asedios?",
    options: ["La minadores (Lağımcı)", "Sipahis", "Janízaros", "Akıncılar"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 150,
    question: "¿Qué general otomano conquistó Bagdad en 1534?",
    options: ["Suleiman I personalmente", "Ibrahim Pachá", "Hayreddin Barbarroja", "Turgut Reis"],
    correctIndex: 0,
    category: "Militar"
  },
  {
    id: 151,
    question: "¿Qué título llevaba el primer ministro del Imperio Otomano?",
    options: ["Gran Visir", "Beylerbeyi", "Pachá", "Effendi"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 152,
    question: "¿Qué institución era el consejo consultivo supremo del sultán?",
    options: ["Divan Imperial", "Meclis", "Senado", "Parlamento"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 153,
    question: "¿Qué título llevaban los gobernadores provinciales de primer rango?",
    options: ["Beylerbeyi", "Pachá", "Valí", "Mutesarrif"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 154,
    question: "¿Cómo se llamaba el sistema administrativo del Imperio Otomano basado en provincias?",
    options: ["Sistema de Vilayet", "Sistema de distritos", "Sistema de cantones", "Sistema de comarcas"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 155,
    question: "¿Qué título llevaba el jefe del cuerpo de janízaros?",
    options: ["Ağası", "Pachá", "Bey", "Effendi"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 156,
    question: "¿Qué sistema político otomano mantenía a los príncipes fuera del poder central?",
    options: ["Sistema de Prisión Dorada", "Sistema de exilio", "Sistema de destierro", "Sistema de aislamiento"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 157,
    question: "¿En qué año se promulgó la primera constitución otomana?",
    options: ["1876", "1856", "1839", "1908"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 158,
    question: "¿Qué nombre recibía la burocracia civil del Imperio Otomano?",
    options: ["Memlük", "Ulema", "Janízaros", "Sipahis"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 159,
    question: "¿Qué código legal fue compilado bajo Suleiman I?",
    options: ["Código Kanun-i Osmani", "Sharia", "Lex Ottomana", "Derecho Imperial"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 160,
    question: "¿Qué sistema de gobierno otomano combinaba poder temporal y religioso?",
    options: ["Sistema dual (Kanun y Sharia)", "Teocracia pura", "Monarquía absoluta", "Oligarquía militar"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 161,
    question: "¿Qué título llevaba el jefe del ulema (clero musulmán)?",
    options: ["Sheij ul-Islam", "Kadı", "Mufti", "Imam"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 162,
    question: "¿Qué privilegio tenían los no musulmanes bajo el sistema de millet?",
    options: ["Autogobierno religioso y legal", "Libertad de culto total", "Igualdad plena", "Exención de impuestos"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 163,
    question: "¿En qué año los Jóvenes Turcos tomaron el poder definitivamente?",
    options: ["1913", "1908", "1909", "1914"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 164,
    question: "¿Qué nombre recibía el parlamento unicameral otomano?",
    options: ["Meclis-i Mebusan", "Senado", "Cámara de Diputados", "Asamblea"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 165,
    question: "¿Qué sistema otomano asignaba tierras a los sipahis a cambio de servicio militar?",
    options: ["Sistema Timar", "Sistema feudal", "Sistema de encomienda", "Sistema de latifundios"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 166,
    question: "¿Quién fue el primer Gran Visir no musulmán en convertirse al Islam?",
    options: ["Ibrahim Pachá", "Kara Mustafá", "Sinan Pachá", "Lala Mustafá"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 167,
    question: "¿Qué reforma de 1839 prometió justicia e igualdad para todos?",
    options: ["Edicto de Gülhane", "Edicto de Reforma", "Edicto de Tanzimat", "Edicto Imperial"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 168,
    question: "¿En qué año se abolió oficialmente el sistema de janízaros?",
    options: ["1826", "1800", "1839", "1856"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 169,
    question: "¿Qué partido político fundaron los Jóvenes Turcos?",
    options: ["Comité de Unión y Progreso", "Partido de la Libertad", "Liga Nacional", "Frente de Reforma"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 170,
    question: "¿Qué título llevaban los jefes de distrito en el Imperio Otomano?",
    options: ["Mutesarrif", "Valí", "Beylerbeyi", "Pachá"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 171,
    question: "¿Qué privilegios tenían los ciudadanos extranjeros bajo el sistema de Capitulaciones?",
    options: ["Extraterritorialidad legal", "Libertad de culto", "Derecho a comerciar", "Todos los anteriores"],
    correctIndex: 3,
    category: "Política"
  },
  {
    id: 172,
    question: "¿Qué nombre recibía el cuerpo de burócratas del sultán?",
    options: ["Hassa", "Memlük", "Kul", "Ulema"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 173,
    question: "¿En qué año se firmó la primera Capitulación con Francia?",
    options: ["1536", "1453", "1600", "1500"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 174,
    question: "¿Qué sistema asignaba tierras imperiales a los sipahis?",
    options: ["Timar", "Iltizam", "Vaqf", "Miri"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 175,
    question: "¿Qué nombre recibían las tierras imperiales en el Imperio Otomano?",
    options: ["Miri", "Vaqf", "Mülk", "Timar"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 176,
    question: "¿En qué año se abolió el sultanato otomano?",
    options: ["1922", "1924", "1920", "1918"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 177,
    question: "¿Qué tribunal especial juzgaba crímenes graves en el Imperio Otomano?",
    options: ["Divan-i Hümayun", "Kadı", "Meclis", "Senado"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 178,
    question: "¿Quién fue el líder de los Jóvenes Turcos que gobernó de facto?",
    options: ["Enver Pachá", "Talat Pachá", "Cemal Pachá", "Abdulhamid II"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 179,
    question: "¿Qué nombre recibía la administración de justicia civil en el Imperio Otomano?",
    options: ["Kanun", "Sharia", "Örf", "Adet"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 180,
    question: "¿En qué año se estableció el primer parlamento otomano?",
    options: ["1876", "1908", "1839", "1856"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 181,
    question: "¿Qué sistema de impuestos recaudaba el Iltizam?",
    options: ["Impuesto anual sobre la tierra", "Impuesto religioso", "Impuesto comercial", "Impuesto militar"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 182,
    question: "¿Qué nombre recibía el sello imperial del sultán?",
    options: ["Tughra", "Firman", "Biat", "Buyruk"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 183,
    question: "¿Qué decreto imperial tenía fuerza de ley?",
    options: ["Firman", "Biat", "Buyruk", "Edicto"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 184,
    question: "¿En qué año se promulgó la reforma de Islahat?",
    options: ["1856", "1839", "1876", "1908"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 185,
    question: "¿Qué título llevaba el gobernador de una ciudad importante?",
    options: ["Valí", "Mutesarrif", "Kadı", "Bey"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 186,
    question: "¿Qué sistema mantenía a los príncipes bajo arresto domiciliario?",
    options: ["Prisión Dorada", "Cárcel Real", "Exilio Dorado", "Palacio Encerrado"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 187,
    question: "¿En qué año se disolvió el parlamento otomano definitivamente?",
    options: ["1920", "1918", "1922", "1914"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 188,
    question: "¿Qué nombre recibía la asamblea consultiva del sultán?",
    options: ["Shura", "Meclis", "Divan", "Senado"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 189,
    question: "¿Qué privilegio otorgaban las Capitulaciones a los europeos?",
    options: ["Exención de impuestos y jurisdicción propia", "Derecho a votar", "Libertad de prensa", "Derecho a poseer tierras"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 190,
    question: "¿Quién fue el último Gran Visir del Imperio Otomano?",
    options: ["Ahmed Tevfik Pachá", "Said Halim Pachá", "Talat Pachá", "Enver Pachá"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 191,
    question: "¿Qué nombre recibían los tribunales religiosos en las ciudades?",
    options: ["Kadı", "Sheij ul-Islam", "Mufti", "Imam"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 192,
    question: "¿Qué sistema otomano dividía a la población en comunidades religiosas autónomas?",
    options: ["Sistema de Millet", "Sistema de Cantones", "Sistema de Distritos", "Sistema de Provincias"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 193,
    question: "¿Qué nombre recibía la aristocracia militar otomana?",
    options: ["Askeri", "Ulema", "Tüccar", "Reaya"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 194,
    question: "¿En qué año los Jóvenes Turcos restauraron la constitución?",
    options: ["1908", "1876", "1909", "1914"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 195,
    question: "¿Qué nombre recibían las tierras religiosas (waqf) en el Imperio Otomano?",
    options: ["Vaqf", "Miri", "Mülk", "Timar"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 196,
    question: "¿Qué tribunal juzgaba asuntos religiosos en el Imperio Otomano?",
    options: ["Sharia", "Kanun", "Örf", "Adet"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 197,
    question: "¿En qué año Mahmud II abolió los janízaros?",
    options: ["1826", "1800", "1839", "1856"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 198,
    question: "¿Qué nombre recibía el cuerpo de escribas del Divan Imperial?",
    options: ["Nişancı", "Vezir", "Kazasker", "Müftü"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 199,
    question: "¿Qué nombre recibía el cuerpo de jeques del ejército otomano?",
    options: ["Çavuş", "Vezir", "Kazasker", "Müftü"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 200,
    question: "¿En qué año se creó el cargo de Gran Visir por primera vez?",
    options: ["1360", "1400", "1453", "1300"],
    correctIndex: 0,
    category: "Política"
  },
  {
    id: 201,
    question: "¿Cuál era la estructura social básica del Imperio Otomano?",
    options: ["Askeri (militar) y Reaya (súbditos)", "Nobleza y campesinos", "Clero y laicos", "Patricios y plebeyos"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 202,
    question: "¿Qué nombre recibían los súbditos no musulmanes del Imperio Otomano?",
    options: ["Reaya", "Dhimmi", "Giaour", "Kafir"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 203,
    question: "¿Cómo se llamaba el sistema de educación religiosa musulmana?",
    options: ["Madrasa", "Yeshiva", "Escuela catedralicia", "Academia"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 204,
    question: "¿Qué nombre recibían los mercados cubiertos en el Imperio Otomano?",
    options: ["Bedesten", "Bazar", "Souk", "Mercado"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 205,
    question: "¿Cuál era la unidad social básica del Imperio Otomano?",
    options: ["La familia extendida", "La aldea", "El barrio", "El gremio"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 206,
    question: "¿Qué nombre recibían los gremios de artesanos en el Imperio Otomano?",
    options: ["Lonca", "Guild", "Hermandad", "Cofradía"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 207,
    question: "¿Cómo se llamaba el barrio cristiano en las ciudades otomanas?",
    options: ["Barrio cristiano", "Gueto", "Mellah", "Judería"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 208,
    question: "¿Qué nombre recibían los baños públicos en el Imperio Otomano?",
    options: ["Hammam", "Baño", "Thermae", "Sauna"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 209,
    question: "¿Cuál era la religión mayoritaria del Imperio Otomano?",
    options: ["Islam sunita", "Islam chií", "Cristianismo", "Judaísmo"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 210,
    question: "¿Qué nombre recibían los mercaderes extranjeros que vivían en el Imperio Otomano?",
    options: ["Fanariots", "Dhimmi", "Reaya", "Valacos"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 211,
    question: "¿Cómo se llamaba el sistema de administración de justicia para no musulmanes?",
    options: ["Sistema de Millet", "Sistema de distritos", "Sistema de cantones", "Sistema de comarcas"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 212,
    question: "¿Qué nombre recibían las escuelas primarias en el Imperio Otomano?",
    options: ["Mektep", "Madrasa", "Yeshiva", "Escuela"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 213,
    question: "¿Cuál era la ocupación principal de la mayoría de la población otomana?",
    options: ["Agricultura", "Comercio", "Artesanía", "Servicio militar"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 214,
    question: "¿Qué nombre recibían los hospitales en el Imperio Otomano?",
    options: ["Darüşşifa", "Hospital", "Clínica", "Sanatorio"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 215,
    question: "¿Cómo se llamaba el mercado de esclavos en Estambul?",
    options: ["Avret Pazari", "Gran Bazar", "Bedesten", "Souk"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 216,
    question: "¿Qué nombre recibían los centros de educación superior religiosa?",
    options: ["Madrasa", "Mektep", "Universidad", "Academia"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 217,
    question: "¿Cuál era la estructura familiar típica en el Imperio Otomano?",
    options: ["Patriarcal extendida", "Matriarcal", "Nuclear", "Comunal"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 218,
    question: "¿Qué nombre recibían los barrios residenciales ricos en Estambul?",
    options: ["Konak", "Mahalle", "Calle", "Plaza"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 219,
    question: "¿Cómo se llamaba el sistema de recolección de impuestos no musulmanes?",
    options: ["Jizya", "Zakat", "Oşr", "Haraç"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 220,
    question: "¿Qué nombre recibían los centros comunitarios en el Imperio Otomano?",
    options: ["Külliye", "Mezquita", "Mercado", "Plaza"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 221,
    question: "¿En qué ciudad se encontraba la capital del Imperio Otomano?",
    options: ["Estambul (Constantinopla)", "Bursa", "Edirne", "Ankara"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 222,
    question: "¿Qué nombre recibían las fuentes públicas en el Imperio Otomano?",
    options: ["Çeşme", "Fuente", "Pilar", "Chorro"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 223,
    question: "¿Cómo se llamaba la escuela para hijos de funcionarios imperiales?",
    options: ["Enderun", "Mektep", "Madrasa", "Academia"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 224,
    question: "¿Qué nombre recibían los caminos principales en el Imperio Otomano?",
    options: ["Kervansaray", "Calzada", "Camino Real", "Vía"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 225,
    question: "¿Cuál era la bebida popular en el Imperio Otomano?",
    options: ["Café", "Vino", "Cerveza", "Whisky"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 226,
    question: "¿Qué nombre recibían los posadas para viajeros en el Imperio Otomano?",
    options: ["Kervansaray", "Hotel", "Posada", "Albergue"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 227,
    question: "¿Cómo se llamaba el vestido tradicional masculino otomano?",
    options: ["Kaftán", "Toga", "Chupa", "Abrigo"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 228,
    question: "¿Qué nombre recibían las escuelas para hijas de la aristocracia?",
    options: ["Mektep-i İnas", "Mektep", "Madrasa", "Academia"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 229,
    question: "¿Cuál era la comida principal en la dieta otomana?",
    options: ["Pan y cereales", "Carne", "Pescado", "Verduras"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 230,
    question: "¿Qué nombre recibían los jardines públicos en el Imperio Otomano?",
    options: ["Bağçe", "Jardín", "Parque", "Huerto"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 231,
    question: "¿Cómo se llamaba la reunión social para beber café y fumar?",
    options: ["Meclis", "Fiesta", "Reunión", "Convite"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 232,
    question: "¿Qué nombre recibían los barrios de artesanos en Estambul?",
    options: ["Mahalle", "Barrio", "Colonia", "Distrito"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 233,
    question: "¿En qué ciudad se encuentra la Mezquita Azul?",
    options: ["Estambul", "Bursa", "Edirne", "Konya"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 234,
    question: "¿Qué nombre recibían los barrios residenciales en las ciudades otomanas?",
    options: ["Mahalle", "Barrio", "Colonia", "Distrito"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 235,
    question: "¿Cómo se llamaba la vestimenta femenina tradicional otomana?",
    options: ["Entari", "Kaftán", "Toga", "Vestido"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 236,
    question: "¿Qué nombre recibían los mercados de especias en el Imperio Otomano?",
    options: ["Bedesten", "Bazar", "Souk", "Mercado"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 237,
    question: "¿Cuál era la estructura administrativa de un barrio otomano?",
    options: ["Muhtar (jefe de barrio)", "Alcalde", "Gobernador", "Primer ministro"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 238,
    question: "¿Qué nombre recibían los centros de caridad en el Imperio Otomano?",
    options: ["Imaret", "Hospital", "Escuela", "Mezquita"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 239,
    question: "¿Cómo se llamaban las cárceles para prisioneros de guerra?",
    options: ["Kale", "Cárcel", "Prisión", "Fortaleza"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 240,
    question: "¿Qué nombre recibían los palacios residenciales de los ricos?",
    options: ["Konak", "Yalı", "Villa", "Casa"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 241,
    question: "¿En qué ciudad se encontraba el Palacio de Topkapi?",
    options: ["Estambul", "Bursa", "Edirne", "Ankara"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 242,
    question: "¿Qué nombre recibían los jardines del Palacio de Topkapi?",
    options: ["Bahçe-i Hümayun", "Jardín Imperial", "Parque Real", "Huerto del Sultán"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 243,
    question: "¿Cómo se llamaba la escuela para niños del pueblo en el Imperio Otomano?",
    options: ["Sıbyan Mektebi", "Madrasa", "Universidad", "Academia"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 244,
    question: "¿Qué nombre recibían los centros de aprendizaje de oficios?",
    options: ["Lonca", "Taller", "Escuela", "Academia"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 245,
    question: "¿Cuál era la moneda oficial del Imperio Otomano?",
    options: ["Akçe (más tarde Kuruş y Lira)", "Dólar", "Libra esterlina", "Marco"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 246,
    question: "¿Qué nombre recibían los puentes cubiertos en el Imperio Otomano?",
    options: ["Köprü", "Puente", "Viaducto", "Pasarela"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 247,
    question: "¿Cómo se llamaba el centro de la ciudad en el Imperio Otomano?",
    options: ["Meydan", "Plaza", "Foro", "Agora"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 248,
    question: "¿Qué nombre recibían los molinos de viento en el Imperio Otomano?",
    options: ["Değirmen", "Molino", "Aspa", "Rueda hidráulica"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 249,
    question: "¿En qué ciudad se encuentra la Mezquita de Süleymaniye?",
    options: ["Estambul", "Bursa", "Edirne", "Sarajevo"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 250,
    question: "¿Qué nombre recibían los centros de aprendizaje de arte islámico?",
    options: ["Medrese", "Academia", "Taller", "Escuela de arte"],
    correctIndex: 0,
    category: "Sociedad"
  },
  {
    id: 251,
    question: "¿Quién fue el arquitecto jefe del reinado de Suleiman I?",
    options: ["Mimar Sinan", "Orban", "Piri Reis", "Hayreddin"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 252,
    question: "¿Qué arte consistía en la decoración con azulejos de colores?",
    options: ["Iznik", "Caligrafía", "Miniatura", "Mosaico"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 253,
    question: "¿Qué forma de arte se utilizaba para decorar manuscritos?",
    options: ["Miniatura otomana", "Fresco", "Mural", "Pintura al óleo"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 254,
    question: "¿Qué arte consistía en la decoración con patrones geométricos?",
    options: ["Arabesque", "Caligrafía", "Miniatura", "Mosaico"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 255,
    question: "¿Qué tipo de música se desarrolló en el palacio otomano?",
    options: ["Música clásica otomana", "Música folclórica", "Música religiosa", "Música militar"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 256,
    question: "¿Qué danza sufí se asociaba con los derviches giróvagos?",
    options: ["Sema", "Ballet", "Danza del vientre", "Danza folclórica"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 257,
    question: "¿Qué nombre recibía la cocina imperial otomana?",
    options: ["Matbah-ı Âmire", "Cocina Real", "Cocina Imperial", "Cocina del Sultán"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 258,
    question: "¿Qué forma de arte consistía en la escritura artística árabe?",
    options: ["Caligrafía", "Miniatura", "Arabesque", "Mosaico"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 259,
    question: "¿Qué instrumento musical de cuerda era popular en el Imperio Otomano?",
    options: ["Oud", "Guitarra", "Piano", "Violín"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 260,
    question: "¿Qué nombre recibía el arte de hacer café turco?",
    options: ["Türk kahvesi", "Café turco", "Café oriental", "Café árabe"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 261,
    question: "¿Qué arte decorativo se usaba en las mezquitas?",
    options: ["Azulejería de Iznik", "Vidriera", "Mosaico", "Pintura mural"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 262,
    question: "¿Qué instrumento musical de viento era usado en las bandas militares?",
    options: ["Zurna", "Flauta", "Trompeta", "Clarinete"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 263,
    question: "¿Qué nombre recibía la danza de los derviches rotantes?",
    options: ["Sema", "Danza del vientre", "Danza folclórica", "Ballet"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 264,
    question: "¿Qué forma de arte/textil era el té de seda otomano?",
    options: ["Kaftán de seda", "Alfombra", "Tapiz", "Tela"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 265,
    question: "¿Qué artefacto de metalwork era famoso en el Imperio Otomano?",
    options: ["Candelabro de bronce", "Espada", "Escudo", "Coraza"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 266,
    question: "¿Qué nombre recibía la escuela de arte imperial?",
    options: ["Enderun", "Academia", "Taller", "Escuela"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 267,
    question: "¿Qué forma de arte consistía en la decoración de metales con incrustaciones?",
    options: ["Koftgari", "Esmalte", "Filigrana", "Platería"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 268,
    question: "¿Qué instrumento musical de percusión era usado en las ceremonias?",
    options: ["Ney", "Darbuka", "Pandero", "Timbal"],
    correctIndex: 1,
    category: "Cultura"
  },
  {
    id: 269,
    question: "¿Qué arte consistía en la decoración de madera con incrustaciones de madreperla?",
    options: ["Sedefkari", "Talla", "Esmalte", "Filigrana"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 270,
    question: "¿Qué nombre recibía el estilo arquitectónico otomano de mezquitas?",
    options: ["Estilo clásico otomano", "Estilo bizantino", "Estilo árabe", "Estilo persa"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 271,
    question: "¿Qué forma de arte consistía en la pintura de escenas históricas?",
    options: ["Miniatura otomana", "Paisaje", "Retrato", "Naturaleza muerta"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 272,
    question: "¿Qué artefacto de vidrio era famoso en el Imperio Otomano?",
    options: ["Lámparas de vidrio", "Copas", "Jarrones", "Cristalería"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 273,
    question: "¿Qué nombre recibía el arte de la jardinería otomana?",
    options: ["Jardín turco", "Jardín persa", "Jardín árabe", "Jardín europeo"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 274,
    question: "¿Qué instrumento musical de cuerda se tocaba en el palacio?",
    options: ["Tanbur", "Guitarra", "Arpa", "Lira"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 275,
    question: "¿Qué arte consistía en la decoración de cuero con relieve?",
    options: ["Marroquinería otomana", "Curtido", "Talla en cuero", "Estampado"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 276,
    question: "¿Qué nombre recibía el arte de hacer dulces otomanos?",
    options: ["Pastelería otomana", "Confitería", "Repostería", "Dulcería"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 277,
    question: "¿Qué forma de arte consistía en la decoración de armas con incrustaciones?",
    options: ["Damascado", "Esmalte", "Filigrana", "Grabado"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 278,
    question: "¿Qué artefacto textil era famoso en el Imperio Otomano?",
    options: ["Alfombra turca", "Seda china", "Lana inglesa", "Lino francés"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 279,
    question: "¿Qué nombre recibía la poesía otomana clásica?",
    options: ["Divan edebiyatı", "Poesía lírica", "Poesía épica", "Poesía mística"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 280,
    question: "¿Qué instrumento musical de percusión era popular en las ceremonias?",
    options: ["Darbuka", "Piano", "Violín", "Guitarra"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 281,
    question: "¿Qué arte consistía en la decoración de telas con bordado de oro?",
    options: ["Bordado otomano", "Encaje", "Calado", "Tela pintada"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 282,
    question: "¿Qué nombre recibía el arte de la caligrafía otomana?",
    options: ["Hüsn-i hat", "Caligrafía", "Escritura artística", "Arte de la escritura"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 283,
    question: "¿Qué forma de arte consistía en la decoración de libros iluminados?",
    options: ["Iluminación de manuscritos", "Miniatura", "Caligrafía", "Encuadernación"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 284,
    question: "¿Qué instrumento musical era el símbolo de la música otomana?",
    options: ["Ney (flauta de caña)", "Piano", "Violín", "Guitarra"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 285,
    question: "¿Qué artefacto de cerámica era famoso en Iznik?",
    options: ["Azulejos de cerámica", "Cerámica", "Porcelana", "Terracota"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 286,
    question: "¿Qué nombre recibía el arte de la arquitectura otomana?",
    options: ["Arquitectura clásica otomana", "Arquitectura bizantina", "Arquitectura árabe", "Arquitectura persa"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 287,
    question: "¿Qué forma de arte consistía en la decoración de jardines con fuentes?",
    options: ["Arte de jardinería", "Diseño paisajístico", "Arquitectura paisajística", "Arte floral"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 288,
    question: "¿Qué artefacto de madera era famoso en el Imperio Otomano?",
    options: ["Muebles incrustados de madreperla", "Esculturas", "Marcos", "Cajas"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 289,
    question: "¿Qué nombre recibía el arte de la música otomana?",
    options: ["Música clásica otomana", "Música folclórica", "Música religiosa", "Música popular"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 290,
    question: "¿Qué forma de arte consistía en la decoración de muros con azulejos?",
    options: ["Azulejería", "Mosaico", "Pintura mural", "Estuco"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 291,
    question: "¿Qué artefacto de plata era común en el Imperio Otomano?",
    options: ["Jarras y copas de plata", "Anillos", "Pulseras", "Collares"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 292,
    question: "¿Qué nombre recibía el arte de tejer alfombras en Anatolia?",
    options: ["Tejido de alfombras turcas", "Tapicería", "Telar", "Tejido"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 293,
    question: "¿Qué forma de arte consistía en la creación de fuentes públicas decorativas?",
    options: ["Arte de fuente", "Escultura", "Arquitectura", "Diseño"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 294,
    question: "¿Qué instrumento musical era usado en las ceremonias religiosas sufíes?",
    options: ["Ney", "Piano", "Violín", "Guitarra"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 295,
    question: "¿Qué artefacto de cobre era común en los hogares otomanos?",
    options: ["Cacerolas de cobre", "Platos", "Tazas", "Cucharas"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 296,
    question: "¿Qué nombre recibía el arte de la encuadernación de libros?",
    options: ["Cilt sanatı", "Encuadernación", "Librería", "Diseño de libros"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 297,
    question: "¿Qué forma de arte consistía en la decoración de espejos con filigrana?",
    options: ["Filigrana", "Esmalte", "Cristalería", "Mosaico"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 298,
    question: "¿Qué artefacto textil era usado por los sultanes?",
    options: ["Kaftanes de seda y oro", "Togas", "Chales", "Mantones"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 299,
    question: "¿Qué nombre recibía el arte de la perfumería otomana?",
    options: ["Perfumería otomana", "Aromaterapia", "Cosmética", "Jabones"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 300,
    question: "¿Qué forma de arte consistía en la decoración de armas con filigrana?",
    options: ["Filigrana de armas", "Esmalte", "Damascado", "Grabado"],
    correctIndex: 0,
    category: "Cultura"
  },
  {
    id: 301,
    question: "¿Qué médico otomano escribió obras sobre cirugía y medicina?",
    options: ["Şerafeddin Sabuncuoğlu", "Ibn Sina", "Al-Razi", "Maimónides"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 302,
    question: "¿Qué instrumento astronómico fue perfeccionado por los otomanos?",
    options: ["Astrolabio", "Telescopio", "Brújula", "Reloj de arena"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 303,
    question: "¿Qué científico otomano creó mapas del mundo muy precisos?",
    options: ["Piri Reis", "Takiyüddin", "Katip Çelebi", "Hezarfen"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 304,
    question: "¿Qué inventor otomano voló con alas artificiales en el siglo XVII?",
    options: ["Hezarfen Ahmed Çelebi", "Lagari Hasan Çelebi", "Takiyüddin", "Piri Reis"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 305,
    question: "¿Qué observatorio astronómico construyeron los otomanos en Estambul?",
    options: ["Observatorio de Takiyüddin", "Observatorio de Galileo", "Observatorio de Tycho", "Observatorio Real"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 306,
    question: "¿Qué matemático otomano compiló enciclopedias de conocimiento?",
    options: ["Kâtip Çelebi", "Omar Jayyam", "Al-Juarismi", "Euclides"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 307,
    question: "¿Qué instrumento médico era usado en los hospitales otomanos?",
    options: ["Cauterio", "Microscopio", "Estetoscopio", "Rayos X"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 308,
    question: "¿Qué invento militar otomano revolucionó la guerra de asedio?",
    options: ["Cañón de asedio", "Arma de fuego portátil", "Torre de asedio", "Escudo"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 309,
    question: "¿Qué científico otomano escribió sobre astronomía y construyó relojes?",
    options: ["Takiyüddin", "Piri Reis", "Hezarfen", "Kâtip Çelebi"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 310,
    question: "¿Qué invento naval otomano mejoró la navegación?",
    options: ["Mapa de Piri Reis", "Brújula", "Ancla", "Vela"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 311,
    question: "¿Qué invento de Lagari Hasan Çelebi fue un hito temprano?",
    options: ["Cohete de combustible sólido", "Paracaídas", "Alas artificiales", "Submarino"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 312,
    question: "¿Qué bibliotecario otomano compiló una enciclopedia monumental?",
    options: ["Kâtip Çelebi", "Piri Reis", "Takiyüddin", "Hezarfen"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 313,
    question: "¿Qué instrumento de medición era usado en la agricultura otomana?",
    options: ["Gnomon", "Barómetro", "Termómetro", "Higrómetro"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 314,
    question: "¿Qué inventor otomano diseñó un sistema de riego para jardines?",
    options: ["Mimar Sinan", "Hezarfen", "Takiyüddin", "Piri Reis"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 315,
    question: "¿Qué ciencia se desarrolló en el Imperio Otomano para medir la tierra?",
    options: ["Agrimensura", "Topografía", "Geodesia", "Cartografía"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 316,
    question: "¿Qué mapa famoso del mundo fue creado por Piri Reis en 1513?",
    options: ["Mapa de Piri Reis", "Mapa de Mercator", "Mapa de Colón", "Mapa de Waldseemüller"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 317,
    question: "¿Qué inventor otomano creó el primer reloj astronómico preciso?",
    options: ["Takiyüddin", "Hezarfen", "Piri Reis", "Kâtip Çelebi"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 318,
    question: "¿Qué fábrica de armas imperial era famosa en el Imperio Otomano?",
    options: ["Tophane", "Arsenal", "Fábrica Real", "Fundición"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 319,
    question: "¿Qué invento otomano mejoró la metalurgia del acero?",
    options: ["Acero de Damasco", "Acero inoxidable", "Acero galvanizado", "Acero fundido"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 320,
    question: "¿Qué científico otomano estudió el vuelo de las aves?",
    options: ["Hezarfen Ahmed Çelebi", "Piri Reis", "Takiyüddin", "Kâtip Çelebi"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 321,
    question: "¿Qué instrumento de navegación perfeccionaron los otomanos?",
    options: ["Ballestilla", "Telescopio", "Microscopio", "Barómetro"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 322,
    question: "¿Qué invento de Hezarfen fue un precursor del paracaídas?",
    options: ["Alas artificiales", "Cohete", "Submarino", "Globo aerostático"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 323,
    question: "¿Qué hospital otomano era famoso por su avanzada medicina?",
    options: ["Hospital de Edirne", "Hospital de Estambul", "Hospital de Bursa", "Hospital de Damasco"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 324,
    question: "¿Qué ciencia se desarrolló en las madrasas otomanas?",
    options: ["Astronomía", "Biología", "Química moderna", "Física cuántica"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 325,
    question: "¿Qué invento otomano mejoró la producción de papel?",
    options: ["Fábrica de papel de İznik", "Prensa de imprenta", "Tinta", "Plomo"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 326,
    question: "¿Qué instrumento médico era usado para diagnosticar enfermedades?",
    options: ["Termoscopio", "Estetoscopio", "Microscopio", "Rayos X"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 327,
    question: "¿Qué inventor otomano diseñó un reloj de agua?",
    options: ["Takiyüddin", "Hezarfen", "Piri Reis", "Kâtip Çelebi"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 328,
    question: "¿Qué ciencia se enseñaba en la Escuela de Medicina de Estambul?",
    options: ["Medicina", "Astrología", "Alquimia", "Geomancia"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 329,
    question: "¿Qué invento otomano mejoró la irrigación agrícola?",
    options: ["Sistema de acequias", "Molino de viento", "Arado", "Sembradora"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 330,
    question: "¿Qué mapa de Piri Reis mostraba las costas de América?",
    options: ["Mapa del Mundo de 1513", "Mapa del Atlántico", "Mapa de las Indias", "Mapa de la Luna"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 331,
    question: "¿Qué inventor otomano estudió los principios del vuelo?",
    options: ["Hezarfen Ahmed Çelebi", "Piri Reis", "Takiyüddin", "Lagari Hasan Çelebi"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 332,
    question: "¿Qué instrumento astronómico era usado en los observatorios otomanos?",
    options: ["Cuadrante mural", "Telescopio", "Esfera armilar", "Reloj de sol"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 333,
    question: "¿Qué inventor otomano creó un reloj de péndulo?",
    options: ["Takiyüddin", "Hezarfen", "Piri Reis", "Kâtip Çelebi"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 334,
    question: "¿Qué ciencia se desarrolló en la Escuela de Ingenieros de Estambul?",
    options: ["Ingeniería militar", "Medicina", "Derecho", "Teología"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 335,
    question: "¿Qué invento otomano mejoró la fabricación de armas de fuego?",
    options: ["Cañón fundido en bronce", "Rifle", "Pistola", "Ametralladora"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 336,
    question: "¿Qué científico otomano estudió la óptica?",
    options: ["Takiyüddin", "Hezarfen", "Piri Reis", "Kâtip Çelebi"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 337,
    question: "¿Qué instrumento era usado para medir terrenos en el Imperio Otomano?",
    options: ["Cuerda de medir", "Nivel", "Plomada", "Mira"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 338,
    question: "¿Qué invento de Lagari Hasan Çelebi fue un precursor de la cohetería?",
    options: ["Cohete propulsado", "Globo aerostático", "Planeador", "Submarino"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 339,
    question: "¿Qué científico otomano compiló una enciclopedia de geografía?",
    options: ["Kâtip Çelebi", "Piri Reis", "Takiyüddin", "Hezarfen"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 340,
    question: "¿Qué invento naval otomano mejoró la construcción de barcos?",
    options: ["Diseño de galeras", "Timón", "Ancla", "Vela"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 341,
    question: "¿Qué instrumento médico era usado para cirugías en el Imperio Otomano?",
    options: ["Bisturí", "Microscopio", "Estetoscopio", "Rayos X"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 342,
    question: "¿Qué inventor otomano diseñó una máquina de volar con alas?",
    options: ["Hezarfen Ahmed Çelebi", "Lagari Hasan Çelebi", "Piri Reis", "Takiyüddin"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 343,
    question: "¿Qué ciencia se enseñaba en la Escuela de Náutica de Estambul?",
    options: ["Navegación", "Astronomía", "Matemáticas", "Todas las anteriores"],
    correctIndex: 3,
    category: "Ciencia"
  },
  {
    id: 344,
    question: "¿Qué invento otomano mejoró la producción de textiles?",
    options: ["Telar de pedal", "Prensa", "Molino", "Horno"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 345,
    question: "¿Qué científico otomano estudió la mecánica celeste?",
    options: ["Takiyüddin", "Hezarfen", "Piri Reis", "Kâtip Çelebi"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 346,
    question: "¿Qué instrumento astronómico fue usado en el Observatorio de Estambul?",
    options: ["Cuadrante", "Telescopio", "Microscopio", "Barómetro"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 347,
    question: "¿Qué invento otomano mejoró la construcción de puentes?",
    options: ["Diseño de arco", "Cable", "Hormigón", "Acero"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 348,
    question: "¿Qué inventor otomano diseñó un reloj de sol precursor?",
    options: ["Takiyüddin", "Hezarfen", "Piri Reis", "Kâtip Çelebi"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 349,
    question: "¿Qué ciencia se desarrolló en la Escuela de Medicina de Bursa?",
    options: ["Medicina", "Derecho", "Teología", "Matemáticas"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 350,
    question: "¿Qué invento otomano mejoró la producción de vidrio?",
    options: ["Horno de vidrio", "Prensa", "Molino", "Telar"],
    correctIndex: 0,
    category: "Ciencia"
  },
  {
    id: 351,
    question: "¿En qué ciudad se encontraba la capital del Imperio Otomano?",
    options: ["Estambul (Constantinopla)", "Bursa", "Edirne", "Ankara"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 352,
    question: "¿Qué estrecho separa Europa de Asia en Estambul?",
    options: ["Bósforo", "Dardanelos", "Gibraltar", "Ormus"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 353,
    question: "¿Qué mar baña la costa sur del Imperio Otomano?",
    options: ["Mar Mediterráneo", "Mar Negro", "Mar Rojo", "Mar Caspio"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 354,
    question: "¿En qué continente se encontraba la mayor parte del Imperio Otomano?",
    options: ["Asia", "Europa", "África", "América"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 355,
    question: "¿Qué ciudad fue la segunda capital del Imperio Otomano?",
    options: ["Edirne", "Bursa", "Ankara", "Esmirna"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 356,
    question: "¿Qué montañas formaban la frontera oriental del Imperio Otomano?",
    options: ["Montes Tauro", "Alpes", "Pirineos", "Cárpatos"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 357,
    question: "¿En qué región se encontraba la actual Turquía dentro del Imperio Otomano?",
    options: ["Anatolia", "Balcanes", "Oriente Medio", "Norte de África"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 358,
    question: "¿Qué isla del Mediterráneo fue conquistada por los otomanos en 1571?",
    options: ["Chipre", "Creta", "Rodes", "Malta"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 359,
    question: "¿Qué río era una frontera natural importante del Imperio Otomano?",
    options: ["Danubio", "Sena", "Támesis", "Rin"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 360,
    question: "¿En qué península se encontraban los territorios balcánicos del Imperio?",
    options: ["Península Balcánica", "Península Itálica", "Península Ibérica", "Península Escandinava"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 361,
    question: "¿Qué desierto formaba la frontera sur del Imperio Otomano?",
    options: ["Desierto de Siria", "Sahara", "Gobi", "Kalahari"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 362,
    question: "¿Qué golfo separaba Grecia de Turquía?",
    options: ["Mar Egeo", "Golfo de Venecia", "Golfo de Finlandia", "Golfo de Botnia"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 363,
    question: "¿En qué ciudad se encontraba el Palacio de Topkapi?",
    options: ["Estambul", "Bursa", "Edirne", "Ankara"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 364,
    question: "¿Qué isla del Egeo fue centro cultural otomano?",
    options: ["Lesbos", "Creta", "Chipre", "Rodes"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 365,
    question: "¿Qué ciudad fue capital de Egipto bajo los otomanos?",
    options: ["El Cairo", "Alejandría", "Luxor", "Tebas"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 366,
    question: "¿Qué región montañosa formaba la frontera norte del Imperio?",
    options: ["Cáucaso", "Alpes", "Pirineos", "Andes"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 367,
    question: "¿En qué país se encontraba la ciudad de Bursa?",
    options: ["Turquía", "Grecia", "Siria", "Egipto"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 368,
    question: "¿Qué ciudad portuaria fue centro comercial otomano en el Mediterráneo?",
    options: ["Esmirna", "París", "Londres", "Roma"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 369,
    question: "¿Qué isla del Mediterráneo fue centro de la piratería otomana?",
    options: ["Argel", "Túnez", "Trípoli", "Todas las anteriores"],
    correctIndex: 3,
    category: "Geografía"
  },
  {
    id: 370,
    question: "¿En qué región se encuentra la actual Estambul?",
    options: ["Turquía", "Grecia", "Siria", "Irak"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 371,
    question: "¿Qué estrecho conecta el Mar Negro con el Mar de Mármara?",
    options: ["Bósforo", "Dardanelos", "Gibraltar", "Ormus"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 372,
    question: "¿Qué ciudad de la actual Grecia fue centro otomano durante siglos?",
    options: ["Salónica", "Atenas", "Esparta", "Corinto"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 373,
    question: "¿En qué país se encontraba la ciudad de Sofía bajo los otomanos?",
    options: ["Bulgaria", "Rumanía", "Serbia", "Grecia"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 374,
    question: "¿Qué desierto del Medio Oriente fue territorio otomano?",
    options: ["Desierto de Arabia", "Sahara", "Gobi", "Kalahari"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 375,
    question: "¿Qué montañas formaban la frontera entre el Imperio Otomano y Persia?",
    options: ["Montes Zagros", "Montes Tauro", "Montes Urales", "Montes Himalaya"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 376,
    question: "¿En qué ciudad se encontraba la Mezquita Azul?",
    options: ["Estambul", "Bursa", "Edirne", "Konya"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 377,
    question: "¿Qué isla del Mediterráneo fue base naval otomana?",
    options: ["Rodas", "Creta", "Chipre", "Malta"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 378,
    question: "¿En qué país se encontraba la ciudad de Belgrado bajo los otomanos?",
    options: ["Serbia", "Hungría", "Rumanía", "Bulgaria"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 379,
    question: "¿Qué mar separaba el Imperio Otomano de Italia?",
    options: ["Mar Adriático", "Mar del Norte", "Mar Báltico", "Mar Caspio"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 380,
    question: "¿Qué ciudad fue centro de la ruta de la seda bajo los otomanos?",
    options: ["Trabzón", "Bursa", "Estambul", "Damasco"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 381,
    question: "¿En qué región se encontraba la ciudad de Bagdad bajo los otomanos?",
    options: ["Irak", "Siria", "Egipto", "Arabia Saudita"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 382,
    question: "¿Qué puerto del Mediterráneo fue centro de la armada otomana?",
    options: ["Izmir", "París", "Londres", "Roma"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 383,
    question: "¿En qué país se encontraba la ciudad de Damasco bajo los otomanos?",
    options: ["Siria", "Irak", "Líbano", "Jordania"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 384,
    question: "¿Qué isla del Mediterráneo fue territorio otomano hasta 1912?",
    options: ["Libia (triple)", "Creta", "Chipre", "Rodes"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 385,
    question: "¿Qué ciudad fue centro cultural otomano en Anatolia?",
    options: ["Konya", "Estambul", "Edirne", "Bursa"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 386,
    question: "¿En qué región se encontraba la ciudad de Jeddah bajo los otomanos?",
    options: ["Arabia Saudita", "Irak", "Siria", "Egipto"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 387,
    question: "¿Qué río formaba la frontera occidental del Imperio en Europa?",
    options: ["Danubio", "Sena", "Rin", "Támesis"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 388,
    question: "¿En qué país se encontraba la ciudad de Trípoli bajo los otomanos?",
    options: ["Libia", "Túnez", "Marruecos", "Argelia"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 389,
    question: "¿Qué ciudad portuaria fue centro del comercio de especias otomano?",
    options: ["Alepo", "Estambul", "Bursa", "Edirne"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 390,
    question: "¿En qué país se encontraba la ciudad de Sarajevo bajo los otomanos?",
    options: ["Bosnia", "Serbia", "Croacia", "Eslovenia"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 391,
    question: "¿Qué montañas formaban la frontera sur del Imperio en Anatolia?",
    options: ["Montes Tauro", "Alpes", "Pirineos", "Cárpatos"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 392,
    question: "¿En qué país se encontraba la ciudad de Atenas bajo los otomanos?",
    options: ["Grecia", "Turquía", "Bulgaria", "Serbia"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 393,
    question: "¿Qué estrecho conecta el Mediterráneo con el Mar Negro?",
    options: ["Dardanelos", "Bósforo", "Gibraltar", "Ormus"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 394,
    question: "¿En qué país se encontraba la ciudad de Edirne?",
    options: ["Turquía", "Grecia", "Bulgaria", "Serbia"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 395,
    question: "¿Qué isla del Mar Egeo fue centro cultural otomano?",
    options: ["Quíos", "Creta", "Chipre", "Rodes"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 396,
    question: "¿En qué país se encontraba la ciudad de Beirut bajo los otomanos?",
    options: ["Líbano", "Siria", "Israel", "Jordania"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 397,
    question: "¿Qué ciudad fue centro de la peregrinación a La Meca bajo los otomanos?",
    options: ["La Meca", "Medina", "Jeddah", "Damasco"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 398,
    question: "¿En qué país se encontraba la ciudad de Bucarest bajo los otomanos?",
    options: ["Rumanía", "Bulgaria", "Serbia", "Hungría"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 399,
    question: "¿Qué desierto formaba la frontera oriental del Imperio?",
    options: ["Desierto de Mesopotamia", "Sahara", "Gobi", "Kalahari"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 400,
    question: "¿En qué país se encontraba la ciudad de Bagdad bajo los otomanos?",
    options: ["Irak", "Siria", "Irán", "Arabia Saudita"],
    correctIndex: 0,
    category: "Geografía"
  },
  {
    id: 401,
    question: "¿Qué religión era mayoritaria en el Imperio Otomano?",
    options: ["Islam sunita", "Islam chií", "Cristianismo", "Judaísmo"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 402,
    question: "¿Qué nombre recibían los no musulmanes que pagaban un impuesto especial?",
    options: ["Dhimmi", "Reaya", "Askeri", "Ulema"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 403,
    question: "¿Qué título llevaba el jefe del clero musulmán en el Imperio Otomano?",
    options: ["Sheij ul-Islam", "Imam", "Califa", "Mufti"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 404,
    question: "¿Qué escuela de derecho islámico predominaba en el Imperio Otomano?",
    options: ["Hanafi", "Maliki", "Shafi'i", "Hanbali"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 405,
    question: "¿Qué nombre recibía el impuesto que pagaban los no musulmanes?",
    options: ["Jizya", "Zakat", "Oşr", "Haraç"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 406,
    question: "¿Qué título llevaba el sultán como líder religioso?",
    options: ["Califa", "Imam", "Sheij", "Mufti"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 407,
    question: "¿Qué día de la semana era el día de oración en el Imperio Otomano?",
    options: ["Viernes", "Domingo", "Sábado", "Lunes"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 408,
    question: "¿Qué nombre recibían los tribunales religiosos del Imperio Otomano?",
    options: ["Sharia", "Kanun", "Meclis", "Divan"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 409,
    question: "¿Qué impuesto religioso pagaban los musulmanes en el Imperio Otomano?",
    options: ["Zakat", "Jizya", "Oşr", "Taxes"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 410,
    question: "¿Qué nombre recibían las escuelas coránicas en el Imperio Otomano?",
    options: ["Mektep", "Madrasa", "Yeshiva", "Escuela"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 411,
    question: "¿Qué nombre recibía el impuesto sobre la tierra en el Imperio Otomano?",
    options: ["Haraç", "Zakat", "Jizya", "Oşr"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 412,
    question: "¿Qué día festivo musulmán se celebraba con gran pompa en el Imperio Otomano?",
    options: ["Ramadán y Eid", "Navidad", "Pascua", "Hanukkah"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 413,
    question: "¿Qué nombre recibían las iglesias cristianas bajo dominio otomano?",
    options: ["Iglesia", "Mezquita", "Sinagoga", "Templo"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 414,
    question: "¿Qué nombre recibían los sacerdotes cristianos bajo el Imperio Otomano?",
    options: ["Papaz", "Imam", "Rabino", "Monje"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 415,
    question: "¿Qué rito religioso musulmán se practicaba en las mezquitas otomanas?",
    options: ["Salat (oración)", "Misa", "Sabbat", "Bautismo"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 416,
    question: "¿Qué nombre recibía el peregrinaje a La Meca en el Imperio Otomano?",
    options: ["Hajj", "Umrah", "Ziyaret", "Namaz"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 417,
    question: "¿Qué escuela de derecho islámico era oficial en el Imperio Otomano?",
    options: ["Hanafi", "Maliki", "Shafi'i", "Hanbali"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 418,
    question: "¿Qué nombre recibía la limosna religiosa obligatoria en el Imperio Otomano?",
    options: ["Zakat", "Jizya", "Haraç", "Oşr"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 419,
    question: "¿Qué religión practicaban los derviches giróvagos en el Imperio Otomano?",
    options: ["Sufismo", "Cristianismo", "Judaísmo", "Zoroastrismo"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 420,
    question: "¿Qué nombre recibía el seminario religioso musulmán en el Imperio Otomano?",
    options: ["Madrasa", "Yeshiva", "Seminario", "Academia"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 421,
    question: "¿Qué impuesto especial pagaban los no musulmanes en el Imperio Otomano?",
    options: ["Jizya", "Zakat", "Oşr", "Haraç"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 422,
    question: "¿Qué nombre recibían las mezquitas imperiales en el Imperio Otomano?",
    options: ["Mezquita imperial", "Mezquita real", "Mezquita del sultán", "Gran Mezquita"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 423,
    question: "¿Qué líder religioso musulmán era nombrado por el sultán?",
    options: ["Sheij ul-Islam", "Imam", "Califa", "Mufti"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 424,
    question: "¿Qué nombre recibía la escuela coránica para niños en el Imperio Otomano?",
    options: ["Sıbyan Mektebi", "Madrasa", "Universidad", "Academia"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 425,
    question: "¿Qué texto sagrado del Islam se estudiaba en las madrasas otomanas?",
    options: ["Corán", "Biblia", "Torá", "Vedas"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 426,
    question: "¿Qué nombre recibía la oración ritual del viernes en el Imperio Otomano?",
    options: ["Namaz-ı Cuma", "Salat", "Dua", "Istisqa"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 427,
    question: "¿Qué festividad musulmana se celebraba al final del Ramadán?",
    options: ["Ramazan Bayramı (Eid al-Fitr)", "Kurban Bayramı", "Mevlid", "Regaib"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 428,
    question: "¿Qué nombre recibía la festividad del sacrificio en el Imperio Otomano?",
    options: ["Kurban Bayramı", "Ramazan Bayramı", "Mevlid", "Regaib"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 429,
    question: "¿Qué nombre recibían los monjes sufíes en el Imperio Otomano?",
    options: ["Derviche", "Monje", "Sacerdote", "Rabino"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 430,
    question: "¿Qué orden sufí era oficial en el Imperio Otomano?",
    options: ["Mevlevi (derviches giróvagos)", "Franciscanos", "Dominicos", "Jesuitas"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 431,
    question: "¿Qué nombre recibían las festividades religiosas musulmanas en el Imperio Otomano?",
    options: ["Bayram", "Navidad", "Pascua", "Hanukkah"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 432,
    question: "¿Qué nombre recibía la liturgia de la Mezquita Azul?",
    options: ["Salat", "Misa", "Sabbat", "Oración"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 433,
    question: "¿Qué día festivo musulmán se celebraba con sacrificio de animales?",
    options: ["Kurban Bayramı", "Ramazan Bayramı", "Mevlid", "Regaib"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 434,
    question: "¿Qué nombre recibía la escuela teológica en el Imperio Otomano?",
    options: ["Medrese", "Seminario", "Yeshiva", "Academia"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 435,
    question: "¿Qué nombre recibía el servicio religioso del viernes en las mezquitas?",
    options: ["Jumu'ah", "Misa", "Sabbat", "Vesperas"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 436,
    question: "¿Qué nombre recibían los jefes religiosos locales en el Imperio Otomano?",
    options: ["Mufti", "Imam", "Sheij ul-Islam", "Califa"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 437,
    question: "¿Qué nombre recibía el calendario usado en el Imperio Otomano?",
    options: ["Calendario islámico (Hijri)", "Calendario gregoriano", "Calendario bizantino", "Calendario persa"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 438,
    question: "¿Qué nombre recibían los peregrinos que iban a La Meca desde el Imperio Otomano?",
    options: ["Hacı", "Derviche", "Monje", "Sacerdote"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 439,
    question: "¿Qué nombre recibían los centros religiosos sufíes en el Imperio Otomano?",
    options: ["Tekke", "Mezquita", "Monasterio", "Sinagoga"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 440,
    question: "¿Qué nombre recibía el líder de una tekke sufí?",
    options: ["Sheij", "Imam", "Califa", "Mufti"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 441,
    question: "¿Qué nombre recibía la celebración del nacimiento del profeta Mahoma?",
    options: ["Mevlid Kandili", "Ramazan Bayramı", "Kurban Bayramı", "Regaib"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 442,
    question: "¿Qué nombre recibían las velas encendidas en las mezquitas otomanas?",
    options: ["Şamdan", "Vela", "Lámpara", "Farol"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 443,
    question: "¿Qué nombre recibían los coros religiosos en las mezquitas otomanas?",
    options: ["Mehter", "Coro", "Grito", "Canto"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 444,
    question: "¿Qué nombre recibía la ceremonia del café entre derviches?",
    options: ["Meclis", "Fiesta", "Reunión", "Convite"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 445,
    question: "¿Qué nombre recibían los centros religiosos otomanos?",
    options: ["Külliye", "Mezquita", "Sinagoga", "Iglesia"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 446,
    question: "¿Qué nombre recibía el texto de la ley islámica en el Imperio Otomano?",
    options: ["Sharia", "Kanun", "Tora", "Biblia"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 447,
    question: "¿Qué nombre recibían los festivales religiosos en el Imperio Otomano?",
    options: ["Bayram", "Carnaval", "Fiesta", "Ferias"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 448,
    question: "¿Qué nombre recibían los días sagrados del Islam en el Imperio Otomano?",
    options: ["Kandil", "Navidad", "Pascua", "Hanukkah"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 449,
    question: "¿Qué nombre recibían las festividades nocturnas en el Imperio Otomano?",
    options: ["Kandil", "Fiesta", "Baile", "Gala"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 450,
    question: "¿Qué nombre recibían los festivales de música religiosa sufí?",
    options: ["Ayin", "Concierto", "Festival", "Gala"],
    correctIndex: 0,
    category: "Religión"
  },
  {
    id: 451,
    question: "¿Cuál era la moneda oficial del Imperio Otomano?",
    options: ["Akçe (más tarde Kuruş y Lira)", "Dólar", "Libra esterlina", "Marco"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 452,
    question: "¿Qué sistema de impuestos recaudaba el Iltizam?",
    options: ["Impuesto anual sobre la tierra", "Impuesto religioso", "Impuesto comercial", "Impuesto militar"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 453,
    question: "¿Qué nombre recibían las tierras imperiales en el Imperio Otomano?",
    options: ["Miri", "Vaqf", "Mülk", "Timar"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 454,
    question: "¿Qué sistema otomano asignaba tierras a los sipahis a cambio de servicio militar?",
    options: ["Sistema Timar", "Sistema feudal", "Sistema de encomienda", "Sistema de latifundios"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 455,
    question: "¿Qué nombre recibían los mercados cubiertos en el Imperio Otomano?",
    options: ["Bedesten", "Bazar", "Souk", "Mercado"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 456,
    question: "¿Qué nombre recibían los gremios de artesanos en el Imperio Otomano?",
    options: ["Lonca", "Guild", "Hermandad", "Cofradía"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 457,
    question: "¿Cuál era la ocupación principal de la mayoría de la población otomana?",
    options: ["Agricultura", "Comercio", "Artesanía", "Servicio militar"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 458,
    question: "¿Qué nombre recibían las tierras religiosas (waqf) en el Imperio Otomano?",
    options: ["Vaqf", "Miri", "Mülk", "Timar"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 459,
    question: "¿Qué nombre recibían los centros de caridad en el Imperio Otomano?",
    options: ["Imaret", "Hospital", "Escuela", "Mezquita"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 460,
    question: "¿Qué privilegios tenían los ciudadanos extranjeros bajo el sistema de Capitulaciones?",
    options: ["Exención de impuestos y jurisdicción propia", "Derecho a votar", "Libertad de prensa", "Derecho a poseer tierras"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 461,
    question: "¿En qué año se firmó la primera Capitulación con Francia?",
    options: ["1536", "1453", "1600", "1500"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 462,
    question: "¿Qué moneda de plata era común en el Imperio Otomano?",
    options: ["Kuruş", "Dólar", "Libra", "Marco"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 463,
    question: "¿Qué nombre recibían los comerciantes en el Imperio Otomano?",
    options: ["Tüccar", "Mercader", "Comerciante", "Negociante"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 464,
    question: "¿Qué nombre recibían los bancos en el Imperio Otomano?",
    options: ["Banka", "Casa de moneda", "Casa de cambio", "Aduana"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 465,
    question: "¿Qué nombre recibía la casa de moneda del Imperio Otomano?",
    options: ["Darphane", "Fábrica", "Moneda", "Ceca"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 466,
    question: "¿Qué impuesto especial pagaban los no musulmanes en el Imperio Otomano?",
    options: ["Jizya", "Zakat", "Haraç", "Oşr"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 467,
    question: "¿Qué nombre recibían los aduanas en los puertos otomanos?",
    options: ["Gümrük", "Puerto", "Aduana", "Muelle"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 468,
    question: "¿Qué nombre recibían los mercados de esclavos en el Imperio Otomano?",
    options: ["Avret Pazari", "Gran Bazar", "Bedesten", "Souk"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 469,
    question: "¿Qué nombre recibían los impuestos sobre la tierra en el Imperio Otomano?",
    options: ["Öşür", "Jizya", "Zakat", "Haraç"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 470,
    question: "¿Qué nombre recibían los monopolios estatales en el Imperio Otomano?",
    options: ["İhtisab", "Monopolio", "Concesión", "Licencia"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 471,
    question: "¿Qué nombre recibían los impuestos especiales en el Imperio Otomano?",
    options: ["Avarız", "Jizya", "Zakat", "Haraç"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 472,
    question: "¿Qué nombre recibían los mercados de especias en el Imperio Otomano?",
    options: ["Bedesten", "Bazar", "Souk", "Mercado"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 473,
    question: "¿Qué nombre recibían los caminos comerciales en el Imperio Otomano?",
    options: ["Kervansaray", "Calzada", "Camino Real", "Vía"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 474,
    question: "¿Qué nombre recibían los posadas para comerciantes en el Imperio Otomano?",
    options: ["Kervansaray", "Hotel", "Posada", "Albergue"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 475,
    question: "¿Qué nombre recibían los gremios de artesanos en las ciudades otomanas?",
    options: ["Lonca", "Guild", "Hermandad", "Cofradía"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 476,
    question: "¿Qué nombre recibían los bancos en el Imperio Otomano?",
    options: ["Banka", "Casa de moneda", "Casa de cambio", "Aduana"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 477,
    question: "¿Qué nombre recibían las fábricas textiles en el Imperio Otomano?",
    options: ["Fábrica de seda", "Telar", "Fábrica", "Manufactura"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 478,
    question: "¿Qué nombre recibían los astilleros en el Imperio Otomano?",
    options: ["Tersane", "Astillero", "Fábrica naval", "Puerto"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 479,
    question: "¿Qué nombre recibían los almacenes de grano en el Imperio Otomano?",
    options: ["Mahzen", "Almacén", "Granero", "Depósito"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 480,
    question: "¿Qué nombre recibían los mercados de textiles en el Imperio Otomano?",
    options: ["Bezesten", "Mercado", "Bazar", "Souk"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 481,
    question: "¿Qué nombre recibían los molinos de agua en el Imperio Otomano?",
    options: ["Değirmen", "Molino", "Fábrica", "Taller"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 482,
    question: "¿Qué nombre recibían los depósitos de sal en el Imperio Otomano?",
    options: ["Tuz Ambarı", "Depósito", "Almacén", "Granero"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 483,
    question: "¿Qué nombre recibían los mercados de especias en Estambul?",
    options: ["Bedesten", "Bazar", "Souk", "Mercado"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 484,
    question: "¿Qué nombre recibían los bancos otomanos del siglo XIX?",
    options: ["Ottoman Bank", "Banka", "Casa de moneda", "Casa de cambio"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 485,
    question: "¿Qué nombre recibían las fábricas de armas en el Imperio Otomano?",
    options: ["Tophane", "Fábrica", "Arsenal", "Fundición"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 486,
    question: "¿Qué nombre recibían los astilleros de Estambul?",
    options: ["Tersane", "Astillero", "Fábrica naval", "Puerto"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 487,
    question: "¿Qué nombre recibían los depósitos de armas en el Imperio Otomano?",
    options: ["Cebeci", "Arsenal", "Depósito", "Almacén"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 488,
    question: "¿Qué nombre recibían los mercados de caballos en el Imperio Otomano?",
    options: ["Pazari", "Mercado", "Feria", "Exposición"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 489,
    question: "¿Qué nombre recibían los depósitos de aceite en el Imperio Otomano?",
    options: ["Mahzen", "Almacén", "Depósito", "Bodega"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 490,
    question: "¿Qué nombre recibían los mercados de ganado en el Imperio Otomano?",
    options: ["Hayvan Pazarı", "Mercado", "Feria", "Corral"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 491,
    question: "¿Qué nombre recibían los gremios de tejedores en el Imperio Otomano?",
    options: ["Lonca de tejedores", "Gremio", "Hermandad", "Cofradía"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 492,
    question: "¿Qué nombre recibían los mercados de pescado en el Imperio Otomano?",
    options: ["Balık Pazarı", "Mercado", "Feria", "Puerto"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 493,
    question: "¿Qué nombre recibían los bancos otomanos del siglo XIX?",
    options: ["Banka-i Osmani", "Banka", "Casa de moneda", "Casa de cambio"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 494,
    question: "¿Qué nombre recibían los depósitos de papel en el Imperio Otomano?",
    options: ["Kağıthane", "Depósito", "Almacén", "Fábrica"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 495,
    question: "¿Qué nombre recibían los mercados de frutas en el Imperio Otomano?",
    options: ["Meyve Pazarı", "Mercado", "Feria", "Huerto"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 496,
    question: "¿Qué nombre recibían los gremios de curtidores en el Imperio Otomano?",
    options: ["Lonca de curtidores", "Gremio", "Hermandad", "Cofradía"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 497,
    question: "¿Qué nombre recibían los mercados de verduras en el Imperio Otomano?",
    options: ["Sebze Pazarı", "Mercado", "Feria", "Huerto"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 498,
    question: "¿Qué nombre recibían los bancos privados otomanos del siglo XIX?",
    options: ["Banka-i Osmani", "Banka", "Casa de moneda", "Casa de cambio"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 499,
    question: "¿Qué nombre recibían los gremios de plateros en el Imperio Otomano?",
    options: ["Lonca de plateros", "Gremio", "Hermandad", "Cofradía"],
    correctIndex: 0,
    category: "Economía"
  },
  {
    id: 500,
    question: "¿Qué nombre recibían los mercados de libros en el Imperio Otomano?",
    options: ["Sahaflar Çarşısı", "Mercado", "Librería", "Feria"],
    correctIndex: 0,
    category: "Economía"
  }
];
export default questions;
