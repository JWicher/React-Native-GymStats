export default {
  id: 3219832184,
  user_name: "Jarek",
  measurements: {
    places: [
      { name: "biceps lewy", id: 1321 },
      { name: "klatka góra", id: 5226 }
    ],
    history: [
      {
        day: "2019-09-02",
        places: [
          {
            name: "biceps lewy",
            id: 5612,
            value: 23
          }
        ]
      }
    ]
  },
  trainings: [
    {
      id: 87746334,
      name: "Trening siłowy",
      type: "gym",
      last_day_trained: "2019-09-02",
      training_stats: {
        total_weight: 100,
        total_repeats: 200,
        total_time: 600,
        total_series_qty: 10,
        average_weight: 100,
        average_repeats: 200,
        average_time: 600,
        average_series_qty: 50
      },
      excercisesId: ["12351", "64812"]
    }
  ],
  training_groups: [
    {
      id: 3219832184,
      trainingId: 87746334,
      name: "Klatka i barki",
      last_day_trained: "2019-09-02",
      training_group_stats: {
        total_weight: 100,
        total_repeats: 200,
        total_done_trainings: 50,
        total_time: 600
      },
      training_day_parts: ["23"]
    },
    {
      id: 55456456,
      trainingId: 87746334,
      name: "Klatka i r",
      last_day_trained: "2019-09-02",
      training_group_stats: {
        total_weight: 100,
        total_repeats: 200,
        total_done_trainings: 50,
        total_time: 600
      },
      training_day_parts: ["23"]
    }
  ],
  training_day_parts: [
    {
      id: 23543,
      trainingGroupId: 3219832184,
      name: "Klatka",
      last_day_trained: "2019-09-02",
      training_day_parts_stats: {
        total_weight: 100,
        total_repeats: 200,
        total_done_trainings: 50
      },
      excercisesId: [2316898132165, "1233"]
    },
    {
      id: 55456456,
      trainingGroupId: 3219832184,
      name: "Barki",
      last_day_trained: "2019-09-02",
      training_day_parts_stats: {
        total_weight: 100,
        total_repeats: 200,
        total_done_trainings: 50
      },
      excercisesId: [55456456]
    }
  ],
  excercises: [
    {
      id: 2316898132165,
      name: "wyciskanie",
      training_day_part_id: 23543,
      last_day_trained: "2019-09-02",
      excercise_stats: {
        total_weight: 100,
        total_repeats: 200,
        total_done_trainings: 50
      },
      history: [
        {
          id: 2316898135165,
          day: "2019-09-02",
          series: [
            {
              name: "seria 1",
              repeats: 20,
              weight: 40
            }
          ]
        }
      ]
    },
    {
      id: 55456456,
      name: "płaska",
      training_day_part_id: 23543,
      last_day_trained: "2019-09-02",
      excercise_stats: {
        total_weight: 100,
        total_repeats: 200,
        total_done_trainings: 50
      },
      history: [
        {
          id: 2316898135165,
          day: "2019-09-02",
          series: [
            {
              name: "seria 1",
              repeats: 20,
              weight: 40
            }
          ]
        }
      ]
    },
    {
      id: 4434,
      name: "rozpietki",
      training_day_part_id: 23543,
      last_day_trained: "2019-09-02",
      excercise_stats: {
        total_weight: 100,
        total_repeats: 200,
        total_done_trainings: 50
      },
      history: [
        {
          id: 2316898135165,
          day: "2019-09-02",
          series: [
            {
              name: "seria 1",
              repeats: 20,
              weight: 40
            }
          ]
        }
      ]
    }
  ]
};