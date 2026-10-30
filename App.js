// Profile Card — practical task (React Native basics)
// Follow the steps in README.md and build your solution in this file.
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  useWindowDimensions,
} from 'react-native';

// Data to display. Do not change it.
const BIO =
  'Building cross-platform apps with React Native. I love clean layouts, accessible design and sharing what I learn with the community.';

const STATS = [
  { label: 'Projects', value: '24' },
  { label: 'Followers', value: '1.2k' },
  { label: 'Following', value: '180' },
];

const SKILLS = ['React Native', 'JavaScript', 'UI Design', 'Git', 'Flexbox'];

const COLORS = {
  background: '#EEF1F6',
  card: '#FFFFFF',
  text: '#1F2330',
  muted: '#6B7280',
  primary: '#2F6FED',
  primaryLight: '#E8EEFF',
  border: '#E5E7EB',
  online: '#22C55E',
};

// BONUS: reusable components with props
function StatItem({ label, value, divider }) {
  return (
    <View style={[styles.stat, divider && styles.statDivider]}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Tag({ label }) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{label}</Text>
    </View>
  );
}

export default function App() {
  // BONUS: on wide screens (more than 600 px) the card gets a maxWidth and is centered
  const { width } = useWindowDimensions();
  const isWide = width > 600;

  return (
    <View style={styles.screen}>
      {/* TODO STEP 1: build the card with View and Text (name, role, location, bio) */}
      <View style={[styles.card, isWide && styles.cardWide]}>
        {/* TODO STEP 2: add the banner and the avatar with Image */}
        <Image
          style={styles.banner}
          resizeMode="cover"
          source={require('./assets/banner.png')}
        />

        <View style={styles.body}>
          {/* TODO STEP 3: header row and stats row with Flexbox */}
          <View style={styles.headerRow}>
            {/* TODO STEP 4: online badge, skill tags and action buttons (layout) */}
            <View style={styles.avatarWrap}>
              <Image
                style={styles.avatar}
                source={require('./assets/avatar.png')}
              />
              <View style={styles.onlineBadge} />
            </View>

            <View style={styles.headerText}>
              <Text style={styles.name}>Constanza Venegas</Text>
              <Text style={styles.role}>Estudiante</Text>
              <Text style={styles.location}>Chillán, Chile</Text>
            </View>
          </View>

          <Text style={styles.bio} numberOfLines={3}>
            {BIO}
          </Text>

          <View style={styles.statsRow}>
            {STATS.map((item, index) => (
              <StatItem
                key={item.label}
                label={item.label}
                value={item.value}
                divider={index < STATS.length - 1}
              />
            ))}
          </View>

          <View style={styles.skills}>
            <Text style={styles.skillsTitle}>Skills</Text>
            <View style={styles.tags}>
              {SKILLS.map((skill) => (
                <Tag key={skill} label={skill} />
              ))}
            </View>
          </View>

          <View style={styles.actions}>
            <View style={[styles.button, styles.buttonPrimary]}>
              <Text style={[styles.buttonText, styles.buttonTextPrimary]}>Follow</Text>
            </View>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Message</Text>
            </View>
          </View>

          {/* TODO STEP 5: polish the styles (colors, typography, shadow) */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.background,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: COLORS.text,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.12,
        shadowRadius: 16,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  cardWide: {
    width: '100%',
    maxWidth: 420,
    alignSelf: 'center',
  },
  banner: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  body: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
  },
  avatarWrap: {
    marginTop: -48,
    alignSelf: 'flex-start',
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 4,
    borderColor: COLORS.card,
  },
  headerText: {
    flex: 1,
    marginLeft: 16,
    marginTop: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  role: {
    fontSize: 16,
    color: COLORS.primary,
    marginTop: 2,
    ...Platform.select({
      android: { fontFamily: 'sans-serif-medium' },
      ios: { fontWeight: '600' },
    }),
  },
  location: {
    fontSize: 14,
    color: COLORS.muted,
    marginTop: 2,
  },
  bio: {
    fontSize: 14,
    lineHeight: 21,
    color: COLORS.text,
    marginTop: 16,
  },
  statsRow: {
    flexDirection: 'row',
    marginTop: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: COLORS.border,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
  },
  statDivider: {
    borderRightWidth: 1,
    borderRightColor: COLORS.border,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  statLabel: {
    fontSize: 13,
    color: COLORS.muted,
    marginTop: 2,
  },
  onlineBadge: {
    position: 'absolute',
    right: 4,
    bottom: 4,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: COLORS.online,
    borderWidth: 3,
    borderColor: COLORS.card,
  },
  skills: {
    marginTop: 16,
  },
  skillsTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: COLORS.muted,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  tags: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 },
  tag: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: COLORS.primaryLight,
  },
  tagText: {
    fontSize: 13,
    color: COLORS.primary,
    ...Platform.select({
      android: { fontFamily: 'sans-serif-medium' },
      ios: { fontWeight: '600' },
    }),
  },
  actions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 20,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: COLORS.primary,
  },
  buttonPrimary: {
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    fontSize: 16,
    color: COLORS.primary,
    ...Platform.select({
      android: { fontFamily: 'sans-serif-medium' },
      ios: { fontWeight: '600' },
    }),
  },
  buttonTextPrimary: {
    color: COLORS.card,
  },
});