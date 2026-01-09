import { useTranslation } from "react-i18next";

function MyContainer() {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("frontpage")}</p>
    </div>
  );
}
export default MyContainer;
