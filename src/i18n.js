import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'vi',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      vi: {
        translation: {
          nav: {
            home: "Giới thiệu",
            services: "Dịch vụ",
            menu: "Menu",
            prices: "Bảng giá",
            contact: "Liên hệ",
            book_now: "Đặt lịch ngay"
          },
          hero: {
            subtitle: "Thư giãn · Phục hồi · Tái sinh",
            title_part1: "Nơi bạn",
            title_part2: "tìm lại",
            title_italic: "chính mình",
            desc: "Ichi Spa mang đến trải nghiệm chăm sóc sức khỏe toàn diện, nơi thiên nhiên và nghệ thuật trị liệu hoà quyện để nuôi dưỡng cả thân lẫn tâm.",
            btn_explore: "Khám phá dịch vụ",
            btn_prices: "Bảng giá"
          },
          stats: {
            clients: "Khách hàng tin tưởng",
            specialists: "Chuyên viên lành nghề",
            categories: "Nhóm dịch vụ chính",
            natural: "Nguyên liệu thiên nhiên"
          },
          services: {
            subtitle: "Dịch vụ của chúng tôi",
            title_part1: "Trải nghiệm",
            title_italic: "thư giãn",
            title_part2: "toàn diện",
            view_all: "Xem tất cả"
          },
          prices: {
            subtitle: "Chi tiết dịch vụ",
            title_part1: "Bảng giá",
            title_italic: "dịch vụ",
            swipe_hint: "Lướt sang để xem thêm →",
            table: {
              service: "Dịch vụ",
              time: "Thời gian",
              desc: "Mô tả",
              price: "Giá (VNĐ)"
            }
          },
          booking: {
            subtitle: "Đặt lịch hẹn",
            title_part1: "Dành thời gian",
            title_part2: "cho",
            title_italic: "chính bạn",
            desc: "Chúng tôi sẽ chuẩn bị không gian và chuyên viên tốt nhất để mang đến trải nghiệm thư giãn hoàn hảo. Đặt lịch trước để được ưu tiên giờ đẹp.",
            info: {
              address: "Địa chỉ",
              phone: "Điện thoại",
              opening: "Giờ mở cửa",
              opening_val: "9:00 - 21:00 hàng ngày"
            },
            form: {
              name: "Họ và tên",
              phone: "Số điện thoại",
              service: "Dịch vụ",
              date: "Ngày hẹn",
              note: "Ghi chú thêm",
              submit: "Xác nhận đặt lịch ↗"
            }
          },
          menu_page: {
            subtitle: "Healing rituals",
            title: "Menu Dịch Vụ",
            desc: "Mời bạn khám phá bản giao hưởng của thảo mộc và kỹ nghệ trị liệu, nơi mỗi liệu trình là một hành trình tái sinh kỳ diệu.",
            back: "Quay lại Menu"
          },
          menu: {
            "body-aroma": {
              name: "Massage Trị Liệu",
              desc: "Phục hồi cơ thể với kỹ thuật massage truyền thống kết hợp tinh dầu thiên nhiên cao cấp."
            },
            "facial-basic": {
              name: "Chăm Sóc Da Mặt",
              desc: "Liệu trình làm sạch sâu, phục hồi và nuôi dưỡng da với công nghệ tiên tiến."
            },
            "neck-shoulder-pro": {
              name: "Cổ Vai Gáy",
              desc: "Giải pháp đặc trị đau mỏi cho dân văn phòng, khôi phục sự linh hoạt cho khớp cổ."
            },
            "hair-60": {
              name: "Gội Đầu Dưỡng Sinh",
              desc: "Kết hợp massage da đầu và ủ tóc thảo dược, giúp tóc mềm mượt và thư giãn sâu."
            }
          }
        }
      },
      en: {
        translation: {
          nav: {
            home: "About Us",
            services: "Services",
            menu: "Menu",
            prices: "Pricing",
            contact: "Contact",
            book_now: "Book Now"
          },
          hero: {
            subtitle: "Relax · Restore · Rebirth",
            title_part1: "The place",
            title_part2: "to find",
            title_italic: "yourself",
            desc: "Ichi Spa brings a holistic health care experience, where nature and the art of therapy blend to nourish both body and mind.",
            btn_explore: "Explore Services",
            btn_prices: "Price List"
          },
          stats: {
            clients: "Trusted Clients",
            specialists: "Skilled Specialists",
            categories: "Main Service Groups",
            natural: "Natural Ingredients"
          },
          services: {
            subtitle: "Our Services",
            title_part1: "Experience",
            title_italic: "relaxation",
            title_part2: "thoroughly",
            view_all: "View All"
          },
          prices: {
            subtitle: "Service Details",
            title_part1: "Service",
            title_italic: "Pricing",
            swipe_hint: "Swipe to see more →",
            table: {
              service: "Service",
              time: "Duration",
              desc: "Description",
              price: "Price (VND)"
            }
          },
          booking: {
            subtitle: "Make an Appointment",
            title_part1: "Take time",
            title_part2: "for",
            title_italic: "yourself",
            desc: "We will prepare the best space and specialists to bring a perfect relaxation experience. Book in advance for priority timing.",
            info: {
              address: "Address",
              phone: "Phone",
              opening: "Opening Hours",
              opening_val: "9:00 - 21:00 Daily"
            },
            form: {
              name: "Full Name",
              phone: "Phone Number",
              service: "Service",
              date: "Appointment Date",
              note: "Additional Notes",
              submit: "Confirm Booking ↗"
            }
          },
          menu_page: {
            subtitle: "Healing rituals",
            title: "Service Menu",
            desc: "Explore a symphony of herbs and therapeutic techniques, where each treatment is a magical journey of rebirth.",
            back: "Back to Menu"
          },
          menu: {
            "body-aroma": {
              name: "Therapeutic Massage",
              desc: "Restore your body with traditional massage techniques combined with premium natural essential oils."
            },
            "facial-basic": {
              name: "Facial Care",
              desc: "Deep cleansing, recovery, and nourishing treatment with advanced technology."
            },
            "neck-shoulder-pro": {
              name: "Neck & Shoulder",
              desc: "Specialized solution for office workers' aches, restoring flexibility to the neck joints."
            },
            "hair-60": {
              name: "Nutritional Shampoo",
              desc: "Combined scalp massage and herbal hair mask for soft hair and deep relaxation."
            }
          }
        }
      },
      jp: {
        translation: {
          nav: {
            home: "私たちについて",
            services: "サービス",
            menu: "メニュー",
            prices: "料金表",
            contact: "お問い合わせ",
            book_now: "今すぐ予約"
          },
          hero: {
            subtitle: "リラックス · 回復 · 再生",
            title_part1: "あなたが",
            title_part2: "自分を",
            title_italic: "見つける場所",
            desc: "Ichi Spaは、自然とセラピーの芸術が融合し、心身ともに満たされる総合的なヘルスケア体験を提供します。",
            btn_explore: "サービスを探索",
            btn_prices: "料金表"
          },
          stats: {
            clients: "信頼できるクライアント",
            specialists: "熟練した専門家",
            categories: "メインサービスグループ",
            natural: "天然成分100%"
          },
          services: {
            subtitle: "私たちのサービス",
            title_part1: "最高の",
            title_italic: "リラクゼーション",
            title_part2: "体験",
            view_all: "すべて見る"
          },
          prices: {
            subtitle: "サービス詳細",
            title_part1: "料金表",
            title_italic: "サービス",
            swipe_hint: "スワイプして詳細を表示 →",
            table: {
              service: "サービス",
              time: "時間",
              desc: "説明",
              price: "料金 (VND)"
            }
          },
          booking: {
            subtitle: "予約する",
            title_part1: "自分のための",
            title_part2: "時間を",
            title_italic: "大切に",
            desc: "最高の空間と専門家をご用意し、完璧なリラクゼーション体験をお届けします。優先的な時間確保のため、事前予約をお勧めします。",
            info: {
              address: "住所",
              phone: "電話番号",
              opening: "営業時間",
              opening_val: "毎日 9:00 - 21:00"
            },
            form: {
              name: "氏名",
              phone: "電話番号",
              service: "サービス",
              date: "予約日",
              note: "備考",
              submit: "予約を確定する ↗"
            }
          },
          menu_page: {
            subtitle: "Healing rituals",
            title: "サービスメニュー",
            desc: "ハーブとセラピー技術のシンフォニーを探索してください。それぞれのトリートメントは魔法のような再生の旅です。",
            back: "メニューに戻る"
          },
          menu: {
            "body-aroma": {
              name: "アロママッサージ",
              desc: "プレミアムな天然エッセンシャルオイルを使用した伝統的なマッサージで、体を回復させます。"
            },
            "facial-basic": {
              name: "フェイシャルケア",
              desc: "高度な技術による深層クレンジング、回復、栄養補給のトリートメント。"
            },
            "neck-shoulder-pro": {
              name: "首・肩のケア",
              desc: "デスクワークによる凝りを解消し、首の柔軟性を取り戻す専門的なソリューション。"
            },
            "hair-60": {
              name: "栄養シャンプー",
              desc: "頭皮マッサージとハーブヘアマスクを組み合わせ、髪を柔らかくし、深いリラクゼーションを提供します。"
            }
          }
        }
      }
    }
  });

export default i18n;
