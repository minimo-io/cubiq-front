<script lang="ts">
	import { m } from '$paraglide/messages';
	import { AppConfig } from '$lib';
	import { Search, Star, TrendingUp } from '@lucide/svelte';

	// Svelte 5 runes for props and state
	let filters = $state({
		search: '',
		type: {
			'Short Course': false,
			Course: false,
			Specialization: false
		},
		level: {
			Beginner: false,
			Intermediate: false,
			Advanced: false
		},
		sortBy: 'Newest'
	});

	// Define the type for a single course item
	interface Course {
		title: string;
		description: string;
		image: string;
		type: 'Short Course' | 'Course' | 'Specialization';
		price: 'Free' | string;
		instructor: string;
		level: 'Beginner' | 'Intermediate' | 'Advanced';
	}

	// Internal data for the component with working image URLs
	const courses: Course[] = [
		{
			title: 'Predictive Maintenance Basics',
			description:
				'Learn to apply AI and machine learning models to predict equipment failures and optimize maintenance schedules for IT infrastructure.',
			image: '/courses/course-1.jpg',
			type: 'Course',
			price: '$99',
			instructor: 'DeepLearning.AI',
			level: 'Advanced'
		},
		{
			title: 'ITAM Fundamentals',
			description:
				'An introductory course to IT Asset Management (ITAM) for small and medium-sized enterprises (SMEs) to track and manage IT assets effectively.',
			image: '/courses/course-2.jpg',
			type: 'Short Course',
			price: 'Free',
			instructor: 'Cubiq Team',
			level: 'Beginner'
		},
		{
			title: 'Knowledge-Base for IT Teams',
			description:
				'A practical guide to building and maintaining a centralized knowledge base to improve problem-solving and collaboration within IT teams.',
			image: '/courses/course-3.jpg',
			type: 'Short Course',
			price: 'Free',
			instructor: 'Cubiq Academy',
			level: 'Intermediate'
		},
		{
			title: 'AI in Real-Time Monitoring',
			description:
				'This specialization teaches how to implement AI algorithms for real-time monitoring of IT systems, reducing downtime and enhancing performance.',
			image: '/courses/course-4.jpg',
			type: 'Specialization',
			price: '$149',
			instructor: 'DeepLearning.AI',
			level: 'Advanced'
		}
	];

	// Functions to handle filters
	function handleClearAll() {
		filters.search = '';
		for (const key in filters.type) {
			filters.type[key] = false;
		}
		for (const key in filters.level) {
			filters.level[key] = false;
		}
	}

	function filteredCourses() {
		let filtered = courses;

		// Search filter
		if (filters.search) {
			filtered = filtered.filter(
				(course) =>
					course.title.toLowerCase().includes(filters.search.toLowerCase()) ||
					course.description.toLowerCase().includes(filters.search.toLowerCase())
			);
		}

		// Type filter
		const activeTypes = Object.keys(filters.type).filter((key) => filters.type[key]);
		if (activeTypes.length > 0) {
			filtered = filtered.filter((course) => activeTypes.includes(course.type));
		}

		// Level filter
		const activeLevels = Object.keys(filters.level).filter((key) => filters.level[key]);
		if (activeLevels.length > 0) {
			filtered = filtered.filter((course) => activeLevels.includes(course.level));
		}

		// Sort filter
		if (filters.sortBy === 'Newest') {
			// Placeholder: sort by some creation date property if available
		}
		// ... add other sorting logic if needed

		return filtered;
	}
</script>

<div class="mx-auto max-w-7xl space-y-8 md:p-8">
	<div class="flex flex-col items-center justify-between gap-8 px-4 md:flex-row">
		<div class="text-center md:max-w-xl md:text-left">
			<h1 class="text-base-content font-sans text-4xl font-extrabold md:text-5xl">
				{m.allCourses()}
			</h1>
			<p class="text-base-content/70 mt-4 font-sans">
				{m.allCoursesSlogan()}
			</p>
		</div>
		<!-- <div class="bg-base-200 flex h-48 w-full items-center justify-center rounded-lg md:w-1/2">
			<img
				src="https://cdn.pixabay.com/photo/2018/01/18/17/49/data-3091104_1280.jpg"
				alt="Abstract Illustration"
				class="h-full w-full rounded-lg object-cover"
			/>
		</div> -->
	</div>

	<div class="grid grid-cols-1 gap-8 md:grid-cols-[1fr_3fr]">
		<div class="flex flex-col gap-4 md:gap-8 md:p-4">
			<div class="form-control">
				<label class="input input-bordered flex items-center gap-2">
					<Search class="h-3" />
					<input
						type="text"
						class="grow"
						placeholder={m.searchSimplePlaceholder()}
						bind:value={filters.search}
					/>
				</label>
			</div>

			<div class="bg-base-200 rounded-lg p-4">
				<div class="flex items-center justify-between md:mb-4">
					<h3 class="font-sans text-lg font-bold">Filters</h3>

					<div class="hidden md:block">
						<button class="btn btn-secondary btn-xs font-sans" onclick={handleClearAll}
							>Clear All</button
						>
					</div>
					<div class="md:hidden">
						<button class="btn btn-secondary btn-xs font-sans" onclick={handleClearAll}
							>Mostrar</button
						>
					</div>
				</div>

				<div class="mb-4 hidden md:block">
					<h4 class="mb-2 text-base">Course Type</h4>
					{#each Object.keys(filters.type) as type}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text font-sans">{type}</span>
								<input type="checkbox" class="checkbox" bind:checked={filters.type[type]} />
							</label>
						</div>
					{/each}
				</div>

				<div class="hidden md:block">
					<h4 class="mb-2 text-base">Level</h4>
					{#each Object.keys(filters.level) as level}
						<div class="form-control">
							<label class="label cursor-pointer">
								<span class="label-text font-sans">{level}</span>
								<input type="checkbox" class="checkbox" bind:checked={filters.level[level]} />
							</label>
						</div>
					{/each}
				</div>
			</div>
		</div>

		<div class="flex flex-col gap-6">
			<div class="flex flex-col items-end justify-end gap-3 sm:flex-row md:items-center">
				<!-- <div role="tablist" class="tabs tabs-bordered"> -->
				<a href="/#">
					<div class="badge md:badge-lg badge-primary font-sans font-bold">
						<TrendingUp class="h-3" />
						{m.allCoursesMostPopular()}
					</div>
				</a>
				<a href="/#">
					<div class="badge badge-ghost md:badge-lg badge-primary font-sans font-bold">
						<Star class="h-3" />
						{m.allCoursesTopRated()}
					</div>
				</a>
				<!-- </div> -->
			</div>

			<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
				{#each filteredCourses() as course (course.title)}
					<div class="card card-compact bg-base-100 border-base-200 border shadow-xl">
						<figure>
							<img src={course.image} alt={course.title} class="h-48 w-full object-cover" />
						</figure>
						<div class="card-body">
							<div class="flex items-center justify-between">
								<span
									class="badge badge-lg {course.type === 'Short Course'
										? 'badge-primary'
										: 'badge-secondary'}"
								>
									{course.type}
								</span>
								{#if course.price === 'Free'}
									<span class="badge badge-lg badge-success font-bold">Free</span>
								{:else}
									<span class="text-primary text-lg font-bold">{course.price}</span>
								{/if}
							</div>
							<h2 class="card-title mt-2 font-sans font-bold">{course.title}</h2>
							<p class="text-base-content/70 flex-grow text-sm">{course.description}</p>
							<div class="mt-4 flex items-center gap-2">
								<span class="text-base-content/50 text-sm">By {course.instructor}</span>
							</div>
							<div class="card-actions mt-4 justify-end">
								<button class="btn btn-primary">Enroll Now</button>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
