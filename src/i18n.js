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
          common: {
            from: "Từ"
          },
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
            desc: "Ichi Spa mang đến trải nghiệm chăm sóc sức khỏe toàn diện, nơi thiên nhiên và nghệ thuật liệu trình hoà quyện để nuôi dưỡng cả thân lẫn tâm.",
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
              opening_val: "10:00 - 22:30 hàng ngày"
            },
            form: {
              name: "Họ và tên",
              phone: "Số điện thoại",
              email: "Email",
              name_placeholder: "Nguyễn Thị Lan",
              submit: "Xác nhận đặt lịch ↗",
              reset: "Đặt lại",
              success: {
                title: "Đặt lịch thành công! ",
                thanks: "Cảm ơn bạn đã tin tưởng Ichi Spa.",
                time_info: "Nhân viên sẽ sớm liên hệ qua điện thoại hoặc email của bạn.",
                footer: "Hẹn gặp bạn để tận hưởng trải nghiệm thư giãn tuyệt vời "
              }
            }
          },
          menu_page: {
            subtitle: "Healing rituals",
            title: "Menu Dịch Vụ",
            desc: "Mời bạn khám phá bản giao hưởng của thảo mộc và kỹ nghệ liệu trình, nơi mỗi liệu trình là một hành trình tái sinh kỳ diệu.",
            back: "Quay lại Menu"
          },
          menu: {
            "body-aroma": {
              name: "Massage Liệu Trình",
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
          common: {
            from: "From"
          },
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
              opening_val: "10:00 - 22:30 Daily"
            },
            form: {
              name: "Full Name",
              phone: "Phone Number",
              email: "Email Address",
              name_placeholder: "Jane Doe",
              submit: "Confirm Booking ↗",
              reset: "Reset",
              success: {
                title: "Booking Successful! ",
                thanks: "Thank you for choosing Ichi Spa.",
                time_info: "Our staff will contact you shortly.",
                footer: "See you soon for a wonderful relaxation experience "
              }
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
          common: {
            from: "から"
          },
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
              opening_val: "毎日 10:00 - 22:30"
            },
            form: {
              name: "氏名",
              phone: "電話番号",
              email: "メールアドレス",
              name_placeholder: "お名前",
              submit: "予約を確定する ↗",
              reset: "リセット",
              success: {
                title: "予約が完了しました！ ",
                thanks: "Ichi Spaをご利用いただきありがとうございます。",
                time_info: "担当スタッフより追ってご連絡いたします。",
                footer: "最高の美と癒やしのひとときをお楽しみください "
              }
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
      },
      ko: {
        translation: {
          common: {
            from: "부터"
          },
          nav: {
            home: "소개",
            services: "서비스",
            menu: "메뉴",
            prices: "가격표",
            contact: "연락처",
            book_now: "지금 예약"
          },
          hero: {
            subtitle: "휴식 · 회복 · 재생",
            title_part1: "당신이",
            title_part2: "자신을",
            title_italic: "찾는 곳",
            desc: "Ichi Spa는 자연과 치료 예술이 어우러져 몸과 마음을 모두 보살피는 통합적인 웰니스 경험을 제공합니다.",
            btn_explore: "서비스 탐색",
            btn_prices: "가격표"
          },
          stats: {
            clients: "신뢰하는 고객",
            specialists: "숙련된 전문가",
            categories: "주요 서비스 그룹",
            natural: "100% 천연 성분"
          },
          services: {
            subtitle: "우리의 서비스",
            title_part1: "최고의",
            title_italic: "리액세이션",
            title_part2: "경험",
            view_all: "모두 보기"
          },
          prices: {
            subtitle: "서비스 상세",
            title_part1: "가격표",
            title_italic: "서비스",
            swipe_hint: "더 보려면 스와이프하세요 →",
            table: {
              service: "서비스",
              time: "시간",
              desc: "설명",
              price: "가격 (VND)"
            }
          },
          booking: {
            subtitle: "예약하기",
            title_part1: "당신을 위한",
            title_part2: "시간을",
            title_italic: "가지세요",
            desc: "최고의 공간과 전문가를 준비하여 완벽한 휴식 경험을 선사하겠습니다. 우선적인 시간 확보를 위해 사전 예약을 권장합니다.",
            info: {
              address: "주소",
              phone: "전화번호",
              opening: "영업 시간",
              opening_val: "매일 10:00 - 22:30"
            },
            form: {
              name: "성함",
              phone: "전화번호",
              email: "이메일",
              name_placeholder: "이름",
              submit: "예약 확정 ↗",
              reset: "초기화",
              success: {
                title: "예약 성공! ",
                thanks: "Ichi Spa를 선택해 주셔서 감사합니다.",
                time_info: "직원이 곧 연락드리겠습니다.",
                footer: "최고의 미와 힐링의 시간을 즐겨보세요 "
              }
            }
          },
          menu_page: {
            subtitle: "치유 의식",
            title: "서비스 메뉴",
            desc: "허브와 치료 기술의 심포니를 탐색해 보세요. 각 치료는 마법 같은 재생의 여정입니다.",
            back: "메뉴로 돌아가기"
          },
          menu: {
            "body-aroma": {
              name: "치료 마사지",
              desc: "프리미엄 천연 에센셜 오일을 사용한 전통 마사지로 몸을 회복시킵니다."
            },
            "facial-basic": {
              name: "페이셜 케어",
              desc: "첨단 기술을 통한 딥 클렌징, 회복 및 영양 공급 트리트먼트."
            },
            "neck-shoulder-pro": {
              name: "목 & 어깨 케어",
              desc: "사무직의 통증을 해결하고 목 관절의 유연성을 회복시키는 전문 솔루션."
            },
            "hair-60": {
              name: "영양 샴푸",
              desc: "두피 마사지와 허브 헤어 마스크를 결합하여 모발을 부드럽게 하고 깊은 휴식을 제공합니다."
            }
          }
        }
      },
      zh: {
        translation: {
          common: {
            from: "从"
          },
          nav: {
            home: "关于我们",
            services: "服务项目",
            menu: "菜单",
            prices: "价格表",
            contact: "联系我们",
            book_now: "立即预约"
          },
          hero: {
            subtitle: "放松 · 恢复 · 重生",
            title_part1: "在这里",
            title_part2: "找回",
            title_italic: "真实的自己",
            desc: "Ichi Spa 提供全面的健康护理体验，将自然与疗愈艺术完美结合，滋养您的身心。",
            btn_explore: "探索服务",
            btn_prices: "价格表"
          },
          stats: {
            clients: "值得信赖的客户",
            specialists: "经验丰富的专家",
            categories: "主要服务类别",
            natural: "100% 天然成分"
          },
          services: {
            subtitle: "我们的服务",
            title_part1: "体验",
            title_italic: "极致放松",
            title_part2: "之旅",
            view_all: "查看全部"
          },
          prices: {
            subtitle: "服务详情",
            title_part1: "服务",
            title_italic: "价格表",
            swipe_hint: "左右滑动查看更多 →",
            table: {
              service: "服务项目",
              time: "时长",
              desc: "描述",
              price: "价格 (VND)"
            }
          },
          booking: {
            subtitle: "预约挂号",
            title_part1: "留点时间",
            title_part2: "给",
            title_italic: "你自己",
            desc: "我们将为您准备最舒适的空间和最专业的理疗师，为您提供完美的放松体验。建议提前预约以确保您的理想时间。",
            info: {
              address: "地址",
              phone: "电话",
              opening: "营业时间",
              opening_val: "每日 10:00 - 22:30"
            },
            form: {
              name: "姓名",
              phone: "手机号码",
              email: "电子邮件",
              name_placeholder: "姓名",
              submit: "确认预约 ↗",
              reset: "重置",
              success: {
                title: "预约成功！",
                thanks: "感谢您选择 Ichi Spa。",
                time_info: "我们的工作人员将很快与您联系。",
                footer: "期待为您带来美妙的放松体验"
              }
            }
          },
          menu_page: {
            subtitle: "治愈仪式",
            title: "服务菜单",
            desc: "探索草药与理疗技术的交响乐，每一次疗程都是一场奇妙的重生之旅。",
            back: "返回菜单"
          },
          menu: {
            "body-aroma": {
              name: "疗愈按摩",
              desc: "结合高端天然精油与传统按摩技术，助您恢复元气。"
            },
            "facial-basic": {
              name: "面部护理",
              desc: "采用先进技术进行深层清洁、修复与滋养护理。"
            },
            "neck-shoulder-pro": {
              name: "颈肩理疗",
              desc: "针对办公室族群的疼痛问题，恢复颈部关节灵活性。"
            },
            "hair-60": {
              name: "滋养洗发",
              desc: "结合头皮按摩与草本发膜，令秀发柔顺并深度放松感官。"
            }
          }
        }
      }
    }
  });

export default i18n;
