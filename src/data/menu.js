export const menuData = {
  body: {
    title: { vi: "Body & Foot Trị Liệu", en: "Body & Foot Therapy", jp: "ボディ＆フットセラピー" },
    sections: [
      {
        subtitle: { vi: "I. Trị Liệu Toàn Thân (Thư giãn cơ bản)", en: "I. Full Body Therapy (Basic)", jp: "I. 全身セラピー（ベーシック）" },
        items: [
          {
            name: { vi: "Aroma Massage", en: "Aroma Massage", jp: "アロママッサージ" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"] },
            description: { 
              vi: "Thư giãn nhẹ nhàng với tinh dầu thiên nhiên, giúp cơ thể thả lỏng.",
              en: "Gentle relaxation with natural oils to help the body loosen up.",
              jp: "天然オイルを使用した穏やかなリラクゼーションで、体の緊張をほぐします。"
            },
            price: ["450.000", "550.000"]
          },
          {
            name: { vi: "Trị liệu toàn thân với Đá Nóng", en: "Hot Stone Body Therapy", jp: "ホットストーン・ボディセラピー" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"] },
            description: {
              vi: "Nhiệt ấm giúp làm mềm cơ và hỗ trợ cơ thể phục hồi.",
              en: "Warm heat helps soften muscles and supports recovery.",
              jp: "温かい熱が筋肉を和らげ、体の回復をサポートします。"
            },
            price: ["480.000", "580.000"]
          }
        ]
      },
      {
        subtitle: { vi: "Trị liệu chuyên sâu", en: "Intensive Therapy", jp: "集中セラピー" },
        items: [
          {
            name: { vi: "Trị liệu toàn thân với Bóng Thảo Dược", en: "Herbal Ball Body Therapy", jp: "ハーバルボール・ボディセラピー" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"] },
            description: {
              vi: "Hơi ấm thảo dược lan sâu, phù hợp với cơ thể đau mỏi.",
              en: "Deep herbal warmth, perfect for body aches.",
              jp: "ハーブの深層的な温かさが、体の痛みに最適です。"
            },
            price: ["520.000", "610.000"]
          }
        ]
      },
      {
        subtitle: { vi: "⭐ SIGNATURE - ĐƯỢC TIN CHỌN NHIỀU NHẤT", en: "⭐ SIGNATURE - MOST CHOSEN", jp: "⭐ シグネチャー - 最も選ばれているメニュー" },
        items: [
          {
            name: { vi: "Trị liệu Toàn Thân với Ngải Đặc Biệt", en: "Special Moxa Therapy", jp: "スペシャルもぐさセラピー" },
            badge: "HOT",
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"] },
            highlight: { vi: "Lựa chọn phục hồi ổn định.", en: "Stabilized recovery choice.", jp: "安定した回復のための選択。" },
            description: {
              vi: "Hơi ấm từ điếu ngải giúp làm ấm sâu và lưu thông tốt hơn.",
              en: "Warmth from moxa stick helps warm deep and circulate better.",
              jp: "もぐさのお灸による温かさが深部まで届き、血行を促進します。"
            },
            price: ["599.000", "699.000"]
          }
        ]
      }
    ]
  },
  neck_shoulder: {
    title: { vi: "Cổ Vai Gáy", en: "Neck & Shoulder", jp: "首・肩" },
    sections: [
      {
        subtitle: { vi: "II. TRỊ LIỆU CỔ VAI GÁY", en: "II. NECK & SHOULDER THERAPY", jp: "II. 首・肩セラピー" },
        items: [
          {
            name: { vi: "Trị liệu Cổ Vai Gáy Chuyên Sâu", en: "Intensive Neck & Shoulder", jp: "首・肩集中ケア" },
            duration: { vi: ["60 phút", "90 phút"], en: ["60 min", "90 min"], jp: ["60分", "90分"] },
            description: { vi: "Giải tỏa căng cứng vùng vai gáy.", en: "Relieve neck and shoulder tension.", jp: "首と肩の緊張を和らげます。" },
            price: ["490.000", "590.000"]
          }
        ]
      }
    ]
  },
  hair: {
    title: { vi: "Gội Đầu", en: "Hair Care", jp: "ヘアケア" },
    sections: [
      {
        subtitle: { vi: "GỘI ĐẦU DƯỠNG SINH", en: "NUTRITIONAL SHAMPOO", jp: "栄養シャンプー" },
        items: [
          {
            name: { vi: "Gội sạch", en: "Clean Wash", jp: "クリーンウォッシュ" },
            duration: { vi: ["30 phút"], en: ["30 min"], jp: ["30分"] },
            description: { vi: "Làm sạch da đầu nhẹ nhàng.", en: "Gentle scalp cleansing.", jp: "穏やかな頭皮クレンジング。" },
            price: ["99.000"]
          }
        ]
      }
    ]
  }
};
